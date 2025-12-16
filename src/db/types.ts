export type Task = {
  _id: string
  title: string
  columnId: string
  boardId: string
}

export type Column = {
  _id: string
  title: string
}

export type Board = {
  _id: string
  title: string
  columns: Column[]
}

export type BoardSelect = {
  _id: string
  title: string
}
