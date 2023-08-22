import axios from 'axios'
import { Data } from '~/components/Base/NewsItem/types'

export const useFetchNews = async (isHeadline?: boolean, search?: string, category?: string, pageSize = '10') => {
  const query = `q=${search ? search : 'World'}`
  const cat = `${search? '&': ''}category=${category ? category : 'general'}`
  const date = `&to=${new Date().toISOString()}`
  const apiKey = `&apiKey=c787da64233445488be37b71fa5fdcfa`
  const type = isHeadline ? 'top-headlines' : 'everything'
  const url = `https://newsapi.org/v2/${type}?${search? query: ''}${cat ? cat : ''}${date}${apiKey}&pageSize=${pageSize}&country=us`

  console.log('Fetching Data....')
  const data = await axios.get(url) as Data
  console.log('Data Fetched')
  console.log(data)
  return data
}