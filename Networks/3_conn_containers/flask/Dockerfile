FROM python:3

RUN apt-get update -y && \
apt-get install -y python3-pip python-dev

WORKDIR /APP

RUN pip install flask requests flask_mysqldb

COPY . .

EXPOSE 5000

CMD ["python", "./app.py"]