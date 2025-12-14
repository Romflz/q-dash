import { type Task as TaskType } from '@/db'

function task({ task }: { task: TaskType }) {
  return <h1>Task: {task.title}</h1>
}

export default task
