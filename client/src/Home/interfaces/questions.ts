interface Questions {
  id: number
  created_at: string
  title: string
  description: string
  answers: string
}

interface Pagination {
  next: boolean
  prev: boolean
}

export interface QuestionsOverview {
  data: Questions[]
  pagination: Pagination | null
}
