import ollama

EMBEDDING_MODEL = 'hf.co/CompendiumLabs/bge-base-en-v1.5-gguf'
LANGUAGE_MODEL = 'hf.co/bartowski/Llama-3.2-1B-Instruct-GGUF'

def add_chunk_to_database(chunk):
    temp_VECTOR_DB = []

    try:
        response = ollama.embeddings(model=EMBEDDING_MODEL, prompt=chunk)
        embedding = response['embedding']
        return (chunk, embedding)
    except Exception as e:
        print(f"Error generating embedding for chunk: {e}")
        # Add a dummy embedding to prevent crashes
        return (chunk, [0.0] * 384)  # BGE embeddings are typically 384-dimensional