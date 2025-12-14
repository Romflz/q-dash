import { type Column as ColumnType, type Task } from '@/db'

type ColumnProps = {
  column: ColumnType
  className?: string
  tasks: Task[]
}

function Column({ column, tasks, className }: ColumnProps) {
    console.log(column)
  const columnTasks = tasks.filter((t) => t.columnId === column._id)
  console.log(columnTasks)
  return (
    <div className={`bg-gray-100 h-full min-w-xs ${className ?? ''}`}>
      <div>
        <span>{column.title}</span>
      </div>
      <div>
        {columnTasks.map((task) => (
          <div key={task._id}>{task.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Column
