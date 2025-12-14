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
    tasks: [
      { _id: 't1', columnId: 'todo', title: 'Learn React basics' },
      { _id: 't2', columnId: 'todo', title: 'Setup project structure' },
      { _id: 't3', columnId: 'todo', title: 'Read documentation' },
      { _id: 't4', columnId: 'doing', title: 'Build Kanban board' },
      { _id: 't5', columnId: 'doing', title: 'Style components' },
      { _id: 't6', columnId: 'done', title: 'Install dependencies' },
      { _id: 't7', columnId: 'done', title: 'Create repo' },
    ],
  },
  {
    _id: 'project-alpha',
    title: 'Project Alpha',
    columns: [
      { _id: 'backlog', title: 'Backlog' },
      { _id: 'in-progress', title: 'In Progress' },
      { _id: 'review', title: 'Review' },
      { _id: 'complete', title: 'Complete' },
    ],
    tasks: [
      { _id: 't8', columnId: 'backlog', title: 'Design database schema' },
      { _id: 't9', columnId: 'backlog', title: 'Write API endpoints' },
      { _id: 't10', columnId: 'in-progress', title: 'User authentication' },
      { _id: 't11', columnId: 'review', title: 'Landing page' },
      { _id: 't12', columnId: 'complete', title: 'Project setup' },
    ],
  },
]
