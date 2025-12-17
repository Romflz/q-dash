import { create } from 'zustand'
import type { Board, Column, Task } from './db'

type Store = {
  boards: Board[]
  tasks: Task[]
  currentActiveBoardId: string
  changeCurrentActiveBoard: (boardId: string) => void
  addTask: (task: Task) => void
  deleteTask: (taskId: string) => void
  moveTask: (taskId: string, newColumnId: string) => void
  addColumn: (boardId: string, column: Column) => void
  deleteColumn: (boardId: string, columnId: string) => void
}

export const initialBoards: Board[] = [
  {
    _id: 'getting-started',
    title: 'Getting Started',
    columns: [
      { _id: 'todo', title: 'To Do' },
      { _id: 'doing', title: 'In Progress' },
      { _id: 'done', title: 'Done' },
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
  },
]

const initialTasks: Task[] = [
  {
    _id: 't1',
    boardId: 'getting-started',
    columnId: 'todo',
    title: 'Learn React basics',
  },
  {
    _id: 't2',
    boardId: 'getting-started',
    columnId: 'todo',
    title: 'Setup project structure',
  },
  {
    _id: 't3',
    boardId: 'getting-started',
    columnId: 'todo',
    title: 'Read documentation',
  },
  {
    _id: 't4',
    boardId: 'getting-started',
    columnId: 'doing',
    title: 'Build Kanban board',
  },
  {
    _id: 't5',
    boardId: 'getting-started',
    columnId: 'doing',
    title: 'Style components',
  },
  {
    _id: 't6',
    boardId: 'getting-started',
    columnId: 'done',
    title: 'Install dependencies',
  },
  {
    _id: 't7',
    boardId: 'getting-started',
    columnId: 'done',
    title: 'Create repo',
  },
  {
    _id: 't8',
    boardId: 'project-alpha',
    columnId: 'backlog',
    title: 'Design database schema',
  },
  {
    _id: 't9',
    boardId: 'project-alpha',
    columnId: 'backlog',
    title: 'Write API endpoints',
  },
  {
    _id: 't10',
    boardId: 'project-alpha',
    columnId: 'in-progress',
    title: 'User authentication',
  },
  {
    _id: 't11',
    boardId: 'project-alpha',
    columnId: 'review',
    title: 'Landing page',
  },
  {
    _id: 't12',
    boardId: 'project-alpha',
    columnId: 'complete',
    title: 'Project setup',
  },
]

export const useStore = create<Store>(set => ({
  boards: initialBoards,
  tasks: initialTasks,
  currentActiveBoardId: '',
  changeCurrentActiveBoard: boardId => set({ currentActiveBoardId: boardId }),
  addTask: task =>
    set(state => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: taskId =>
    set(state => ({
      tasks: state.tasks.filter(t => t._id !== taskId),
    })),

  moveTask: (taskId, newColumnId) =>
    set(state => ({
      tasks: state.tasks.map(t =>
        t._id === taskId ? { ...t, columnId: newColumnId } : t
      ),
    })),

  addColumn: (boardId, column) =>
    set(state => ({
      boards: state.boards.map(b =>
        b._id === boardId ? { ...b, columns: [...b.columns, column] } : b
      ),
    })),

  deleteColumn: (boardId, columnId) =>
    set(state => ({
      boards: state.boards.map(b =>
        b._id === boardId
          ? { ...b, columns: b.columns.filter(c => c._id !== columnId) }
          : b
      ),
      tasks: state.tasks.filter(t => t.columnId !== columnId),
    })),
}))
