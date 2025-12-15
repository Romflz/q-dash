import { useParams } from 'react-router'
import { boards } from '@/db'
import Column from '@/components/Column'

function BoardPage() {
  const { boardId } = useParams()
  const board = boards.find(b => b._id === boardId)

  if (!board) return <div>No Board Found</div>

  return (
    <div className="flex gap-4">
      {board?.columns.map(column => (
        <Column key={column._id} column={column} tasks={board.tasks} />
      ))}
    </div>
  )
}

export default BoardPage
