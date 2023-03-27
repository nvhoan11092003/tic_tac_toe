import { useState } from "react"
import Board from "./components/board"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
const App = () => {
    
    return <div className="flex justify-center items-center h-[100vh]">
        <Board>

        </Board>
    </div>
}

export default App