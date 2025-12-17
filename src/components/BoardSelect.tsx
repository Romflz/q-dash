import { useStore } from '@/store'
import { getBoardPath } from '@/utils/navigation'
import { useNavigate } from 'react-router'

function BoardSelect() {
  const navigate = useNavigate()

  const boards = useStore(state => state.boards)
  const currentActiveBoardId = useStore(state => state.currentActiveBoardId)

  return (
    <div>
      <select
        value={currentActiveBoardId}
        name="boards"
        id="boards"
        onChange={e => navigate(getBoardPath(e.target.value))}
      >
        <option value="" disabled>
          Select board
        </option>

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
