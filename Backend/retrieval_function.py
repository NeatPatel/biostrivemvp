import ollama
import vector_database

def cosine_similarity(a, b):
    dot_product = sum([x * y for x, y in zip(a, b)])
    norm_a = sum([x ** 2 for x in a]) ** 0.5
    norm_b = sum([x ** 2 for x in b]) ** 0.5
    return dot_product / (norm_a * norm_b)

def retrieve(query, top_n=3):
    try:
        response = ollama.embeddings(model=vector_database.EMBEDDING_MODEL, prompt=query)
        query_embedding = response['embedding']
    except Exception as e:
        print(f"Error generating query embedding: {e}")
        # Return empty results if embedding fails
        return []
    
    # temporary list to store (chunk, similarity) pairs
    similarities = []
    for chunk, embedding in vector_database.VECTOR_DB:
        similarity = cosine_similarity(query_embedding, embedding)
        similarities.append((chunk, similarity))
    # sort by similarity in descending order, because higher similarity means more relevant chunks
    similarities.sort(key=lambda x: x[1], reverse=True)
    # finally, return the top N most relevant chunks
    return similarities[:top_n]