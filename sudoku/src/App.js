import React from "react"

import { BoardProvider } from "./Context/Context";
import Board from "./components/Board/Board"
import SolveButton from "./components/SolveButton/SolveButton";
import ResetButton from "./components/ResetButton/ResetButton";

function App() {
  return (
    <BoardProvider>
        <Board />
        <SolveButton />
        <ResetButton />
    </BoardProvider>
  );
}

export default App;
