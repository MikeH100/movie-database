export type Movie = {
  id: string
  title: string
  description: string
  tags: Array<string>
}

export type Errors = {
  title?: string
  description?: string
  genre?: string
}
