
FROM python:3.9
# This file is taken from 'https://fastapi.tiangolo.com/deployment/docker/' which sets up how to run fastapi in docker
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./app /code/app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]

