#!/usr/bin/env python3
"""
Setup script for BioStrive Backend
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required packages"""
    try:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'])
        print("✅ Requirements installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing requirements: {e}")
        return False
    return True

def check_ollama():
    """Check if Ollama is installed and running"""
    try:
        import ollama
        # Try to list models to check if Ollama is running
        models = ollama.list()
        print("✅ Ollama is running and accessible")
        return True
    except Exception as e:
        print(f"❌ Ollama not available: {e}")
        print("Please install and start Ollama: https://ollama.ai/")
        return False

def main():
    print("🧬 BioStrive Backend Setup")
    print("=" * 30)
    
    # Install requirements
    if not install_requirements():
        sys.exit(1)
    
    # Check Ollama
    if not check_ollama():
        print("\n⚠️  Note: You can still run the backend, but AI features won't work without Ollama")
    
    print("\n✅ Setup complete!")
    print("Run 'python app.py' to start the backend server")

if __name__ == "__main__":
    main()
