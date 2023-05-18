export interface Data {
  status: string
  totalResult: number
  articles: [
    {
      source: {
        id: string
        name: string
      },
      author: string,
      title: string,
      description: string,
      url: string,
      urlToImage: string,
      publishedAt: string,
      content: string
    },
  ]
}

export interface Props {
  data: Data
}