from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import HTTPBasic, HTTPBasicCredentials

app = FastAPI()
security = HTTPBasic()

def verify_credentials(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = "my_username"
    correct_password = "my_password"
    if credentials.username != correct_username or credentials.password != correct_password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return credentials

@app.get("/auth")
def auth(credentials: HTTPBasicCredentials = Depends(verify_credentials)):
    return {"status": "success"}

@app.get("/password")
def get_password(credentials: HTTPBasicCredentials = Depends(verify_credentials)):
    return {"password": "your_password_here"}
