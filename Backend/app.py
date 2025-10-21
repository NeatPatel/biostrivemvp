from flask import Flask, request, jsonify
from flask_cors import CORS
import vector_database
import retrieval_function
import ollama
import os

app = Flask(__name__)
CORS(app)

dataset = []

try:
    with open('data/claims.txt', 'r') as file:
        dataset = file.readlines()
        print(f'Loaded {len(dataset)} entries')

    for i, chunk in enumerate(dataset):
        if chunk.strip():  # Only process non-empty lines
            vector_database.add_chunk_to_database(chunk.strip())
            print(f'Added chunk {i+1}/{len(dataset)} to the database')
except Exception as e:
    print(f"Error loading data: {e}")
    print("Starting with empty database...")

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

        instruction_prompt = f'''You are a helpful AI assistant for life sciences claims generation.
        Use only the following pieces of context to generate relevant claims. Don't make up any new information:
        {'\n'.join([f' - {chunk}' for chunk, similarity in retrieved_knowledge])}
        
        Generate 3-5 specific, evidence-based claims for the given therapeutic indication.
        '''

        response = ollama.chat(
            model=vector_database.LANGUAGE_MODEL,
            messages=[
                {'role': 'system', 'content': instruction_prompt},
                {'role': 'user', 'content': f"Generate claims for: {input_query}"},
            ]
        )

        return jsonify({'response': response['message']['content']}), 200

    except Exception as e:
        print(f"Error in generate_claims: {e}")
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)