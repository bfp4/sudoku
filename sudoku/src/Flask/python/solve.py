def possible(board, x, y, n):
    for i in range(9):
        if board[i][x] == n:
            return False

    for i in range(9):
        if board[y][i] == n:
            return False

    x0 = (x//3)*3
    y0 = (y//3)*3
    for i in range(3):
        for j in range(3):
            if board[y0+i][x0+j] == n:
                return False
    
    return True

def solver(board):
    for y in range(9):
        for x in range(9):
            if board[y][x] == 0:
                for n in range(1, 10):
                    if possible(board, x, y, n):
                        board[y][x] = n
                        backtrack = solver(board)
                        if backtrack:
                            return board
                        board[y][x] = 0
                return False
    return True
