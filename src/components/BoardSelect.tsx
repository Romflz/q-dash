import { type BoardSelect } from '@/db'
import { useState } from 'react'

function BoardSelect({ boards }: { boards: BoardSelect[] }) {
  // TODO: UseState usage
  return (
    <div>
      <select name="boards" id="boards">
        {boards.map((board) => (
          <option key={board._id} value={board._id}>
            {board.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BoardSelect
