import BoardSelect from '@/components/BoardSelect'
import { boards } from '@/db'
import { useNavigate } from 'react-router'
import { getBoardPath } from '@/utils/navigation'

function HomePage() {
  const navigate = useNavigate()
  const navigateToBoard = (boardId: string) => navigate(getBoardPath(boardId))

  return (
    <div>
      <BoardSelect boards={boards} onChange={navigateToBoard} />
    </div>
  )
}

export default HomePage
