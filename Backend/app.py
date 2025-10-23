from flask import Flask, request, jsonify
from flask_cors import CORS
import vector_database
import retrieval_function
import ollama
import os

app = Flask(__name__)
CORS(app)

dataset = []

# Each element in the VECTOR_DB will be a tuple (chunk, embedding)
# The embedding is a list of floats, for example: [0.1, 0.04, -0.34, 0.21, ...]
VECTOR_DB = []

try:
    with open('data/claims.txt', 'r') as file:
        dataset = file.readlines()
        print(f'Loaded {len(dataset)} entries')

    for i, chunk in enumerate(dataset):
        if chunk.strip():  # Only process non-empty lines
            VECTOR_DB.append(vector_database.add_chunk_to_database(chunk.strip()))
            print(f'Added chunk {i+1}/{len(dataset)} to the database')

except Exception as e:
    print(f"Error loading data: {e}")
    print("Starting with empty database...")

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'BioStrive Backend is running'}), 200

@app.route('/generate-claims', methods=['POST'])
def generate_claims():
    try:
        input_query = request.json.get('input_query', '')
        if not input_query:
            return jsonify({'error': 'No input query provided'}), 400

        retrieved_knowledge = retrieval_function.retrieve(input_query)

        print('Retrieved knowledge:')
        for chunk, similarity in retrieved_knowledge:
            print(f' - (similarity: {similarity:.2f}) {chunk}')

        # Check if we have retrieved knowledge
        if not retrieved_knowledge:
            # Fallback response when no knowledge is retrieved
            fallback_response = f"""Based on the indication '{input_query}', here are some potential claims:

1. Superior efficacy compared to standard of care in {input_query} patients
2. Improved progression-free survival in treated patients
3. Favorable safety profile with manageable adverse events
4. Enhanced quality of life outcomes
5. Cost-effective treatment option for {input_query}

Note: These are example claims. For evidence-based claims, please ensure Ollama is running and models are available."""
            return jsonify({'response': fallback_response}), 200

        instruction_prompt = f'''You are a helpful AI assistant for life sciences claims generation.
        Use only the following pieces of context to generate relevant claims. Don't make up any new information:
        {'\n'.join([f' - {chunk}' for chunk, similarity in retrieved_knowledge])}
        
        Generate 3-5 specific, evidence-based claims for the given therapeutic indication.
        '''

        try:
            response = ollama.chat(
                model=vector_database.LANGUAGE_MODEL,
                messages=[
                    {'role': 'system', 'content': instruction_prompt},
                    {'role': 'user', 'content': f"Generate claims for: {input_query}"},
                ]
            )
            return jsonify({'response': response['message']['content']}), 200
        except Exception as ollama_error:
            print(f"Ollama error: {ollama_error}")
            # Fallback to retrieved knowledge
            fallback_response = f"""Based on available evidence for '{input_query}':

{chr(10).join([f'• {chunk}' for chunk, similarity in retrieved_knowledge[:3]])}

Note: AI generation unavailable. Showing retrieved evidence only."""
            return jsonify({'response': fallback_response}), 200

    except Exception as e:
        print(f"Error in generate_claims: {e}")
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    print("Starting BioStrive Backend Server...")
    print("Server will be available at: http://localhost:5000")
    print("Health check endpoint: http://localhost:5000/health")
    app.run(host='0.0.0.0', port=5000, debug=True)