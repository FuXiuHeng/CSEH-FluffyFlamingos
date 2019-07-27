#!/usr/bin/python3

# Two ways to start this Flask server
#   1. python3 run.py
#   2. env FLASK_APP=./run.py flask run 

from flask import Flask, escape, request
app = Flask(__name__)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}'

@app.route('/<name>')
def hello_name(name):
    return f'Hello {escape(name)}!'

if __name__ == '__main__':
    app.run()
