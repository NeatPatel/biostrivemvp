import ollama

EMBEDDING_MODEL = 'hf.co/CompendiumLabs/bge-base-en-v1.5-gguf'
LANGUAGE_MODEL = 'hf.co/bartowski/Llama-3.2-1B-Instruct-GGUF'

# Each element in the VECTOR_DB will be a tuple (chunk, embedding)
# The embedding is a list of floats, for example: [0.1, 0.04, -0.34, 0.21, ...]
VECTOR_DB = []

def add_chunk_to_database(chunk):
    try:
        response = ollama.embeddings(model=EMBEDDING_MODEL, prompt=chunk)
        embedding = response['embedding']
        VECTOR_DB.append((chunk, embedding))
    except Exception as e:
        print(f"Error generating embedding for chunk: {e}")
        # Add a dummy embedding to prevent crashes
        VECTOR_DB.append((chunk, [0.0] * 384))  # BGE embeddings are typically 384-dimensional