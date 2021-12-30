import React from "react"

import { BoardProvider } from "./Context/BoardContext";
import Board from "./components/Board/Board"

function App() {
  return (
    <BoardProvider>
      <div>
        <Board />
      </div>
    </BoardProvider>
  );
}

export default App;
