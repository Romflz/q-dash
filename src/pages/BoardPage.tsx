import { useParams } from 'react-router'
import { boards } from '@/db'

function BoardPage() {
  const { boardId } = useParams()
  const board = boards.find(b => b._id === boardId)

  if (!board) return <div>No Board Found</div>

  return <h1>Board Page: {board.title}</h1>
}

export default BoardPage
