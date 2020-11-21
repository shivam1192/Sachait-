from flask import Flask, render_template, request, url_for, redirect, jsonify
import json
app = Flask(__name__)

userdata = 0


@app.route('/')
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5500)
