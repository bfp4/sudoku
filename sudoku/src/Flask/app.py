import requests
from flask import Flask, request

app = Flask(__name__)
app.secret_key = 'the random string'


# @app.route("/board")
# def board():
#     res = requests.get("https://sugoku.herokuapp.com/board?difficulty=easy")
#     data = res.json()
#     board = data['board']

#     return "cool"

@app.route("/solve/<demo>")
def solve(demo):
    print(demo)
    return {"data": demo}

if __name__ == "__main__":
    app.run(debug=True)