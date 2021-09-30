from flask import Flask, jsonify;
app = Flask(__name__)


@app.route("/")
def hello():
    obj = {
        "str": "Hello World!"
    }
    return jsonify(obj)

if __name__ == "__main__":
    app.run()