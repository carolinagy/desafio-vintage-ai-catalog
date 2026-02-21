@app.get("/tools")
def get_tools():
    try:
        response = supabase.table("ai_tools").select("*").execute()
        return response.data
    except Exception as e:
        return {"error": str(e)}