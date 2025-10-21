from flask import Flask, request, jsonify
from flask_cors import CORS
import vector_database
import retrieval_function
import ollama

app = Flask(__name__)
CORS(app)

dataset = []

with open('data/claims.txt', 'r') as file:
    dataset = file.readlines()
    print(f'Loaded {len(dataset)} entries')

for i, chunk in enumerate(dataset):
    vector_database.add_chunk_to_database(chunk)
    print(f'Added chunk {i+1}/{len(dataset)} to the database')

@app.route('/generate-claims', methods=['POST'])
def generate_claims():
    input_query = request.json['input_query']
    retrieved_knowledge = retrieval_function.retrieve(input_query)

    print('Retrieved knowledge:')
    for chunk, similarity in retrieved_knowledge:
        print(f' - (similarity: {similarity:.2f}) {chunk}')

    instruction_prompt = f'''You are a helpful chatbot.
    Use only the following pieces of context to answer the question. Don't make up any new information:
    {'\n'.join([f' - {chunk}' for chunk, similarity in retrieved_knowledge])}
    '''

    response = ollama.chat(
    model=vector_database.LANGUAGE_MODEL,
    messages=[
        {'role': 'system', 'content': instruction_prompt},
        {'role': 'user', 'content': input_query},
    ])

    return jsonify({'response': response['message']['content']}), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)