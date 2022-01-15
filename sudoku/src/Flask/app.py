from flask import Flask, request
from python.solve import solver 

app = Flask(__name__)
app.secret_key = 'the random string'

@app.route("/solve", methods=["POST"])
def solve():
    board = request.json
    solved_board = solver(board)
    return {"solvedBoard": solved_board}

if __name__ == "__main__":
    app.run(debug=True)