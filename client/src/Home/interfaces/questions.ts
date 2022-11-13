interface Questions {
  id: number
  created_at: string
  title: string
  description: string
  answers: string
  difficulty: string
  is_completed: boolean
  likes: number
}

interface Pagination {
  next: boolean
  prev: boolean
}

export interface QuestionsOverview {
  data: Questions[]
  pagination: Pagination | null
}
