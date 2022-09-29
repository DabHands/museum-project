from typing import Union

from fastapi import FastAPI, status

app = FastAPI()

@app.get("/identify", status_code=status.HTTP_200_OK)
async def identify():
    '''
    Simple identification function
    '''
    return {"name": "Recognition Service", "Author":"Lucy Jefford"}
