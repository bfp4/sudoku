import React from "react"
import "./styles.css"

import { BoardProvider } from "./Context/Context";
import Board from "./components/Board/Board"
import SolveButton from "./components/SolveButton/SolveButton";
import ResetButton from "./components/ResetButton/ResetButton";

function App() {
  return (
    <div className="app">
      <BoardProvider>
          <Board />
          <div className="buttons-container">
            <SolveButton />
            <ResetButton />
          </div>
      </BoardProvider>
    </div>
  );
}

export default App;
