export type Movie = {
  id: string
  title: string
  description: string
  tags: Array<string>
  img?: string
}

export type Errors = {
  title?: string
  description?: string
  genre?: string
}
