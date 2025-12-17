import { useParams } from 'react-router'
import { useEffect } from 'react'
import Column from '@/components/Column'
import { useStore } from '@/store'

function BoardPage() {
  // Get board ID from url. When this changes, it will rerender the component
  const { boardId } = useParams()

  // Get boards and change active board action
  const boards = useStore(state => state.boards)
  const changeCurrentActiveBoard = useStore(
    state => state.changeCurrentActiveBoard
  )

  // Find the board from boards based on URL board ID
  const board = boards.find(b => b._id === boardId)

  // Watch for changes
  useEffect(() => {
    if (board) changeCurrentActiveBoard(board._id)
  }, [board, changeCurrentActiveBoard])

  if (!board) {
    return <div>Board not found</div>
  }

  return <div className="flex gap-4"></div>
}

export default BoardPage
