export type Movie = {
  id: string
  title: string
  description: string
  tags?: Tags[]
}

export type Tags = {
  tag: string
}

export type Errors = {
  title?: string
  description?: string
}
