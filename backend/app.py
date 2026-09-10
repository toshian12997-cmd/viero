from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Veyro API', version='1.0.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=False,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/api/health')
def health():
    return {'status': 'ok', 'service': 'veyro-api'}

@app.get('/api')
def root():
    return {'message': 'Veyro API is running'}
