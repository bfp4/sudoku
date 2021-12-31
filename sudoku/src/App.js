import React from "react"

import { BoardProvider } from "./Context/BoardContext";
import Board from "./components/Board/Board"
import SolveButton from "./components/SolveButton/SolveButton";

function App() {
  return (
    <BoardProvider>
        <Board />
        <SolveButton />
    </BoardProvider>
  );
}

export default App;
