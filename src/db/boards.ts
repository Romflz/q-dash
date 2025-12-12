import { type Board } from './types'

export const boards: Board[] = [
  {
    _id: 'getting-started',
    title: 'Getting Started',
    columns: [
      { _id: 'todo', title: 'To Do' },
      { _id: 'doing', title: 'In Progress' },
      { _id: 'done', title: 'Done' },
    ],
    tasks: [],
  },
]
