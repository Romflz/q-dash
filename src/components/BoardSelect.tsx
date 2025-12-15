import { type BoardSelect as BoardSelectType } from '@/db'

type BoardSelectProps = {
  boards: BoardSelectType[]
  onChange: (boardId: string) => void
}

function BoardSelect({ boards, onChange }: BoardSelectProps) {
  return (
    <div>
      <select
        name="boards"
        id="boards"
        onChange={e => onChange(e.target.value)}
      >
        {boards.map(board => (
          <option key={board._id} value={board._id}>
            {board.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BoardSelect
