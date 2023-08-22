export interface Props {
  type: 'headline' | 'regular',
  data: {
    image: string,
    title: string,
    date?: string,
    author?: string
  }
}