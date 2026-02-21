from fastapi import FastAPI
from supabase import create_client, Client
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()

@app.get("/")
def home():
    return {"message": "API Desafio Vintage funcionando!"}

@app.get("/tools")
def get_tools():
    response = supabase.table("ai_tools").select("*").execute()
    return response.data