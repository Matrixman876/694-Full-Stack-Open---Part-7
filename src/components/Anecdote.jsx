import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdotes }) => {
  const { id } = useParams()
  const an = anecdotes.find(a => a.id == id)
  if(!an) return <div>Not found</div>
  return (
    <div>
      <h2>{an.content}</h2>
      <div>author: {an.author}</div>
      <div>votes: {an.votes}</div>
      <div>info: {an.info}</div>
    </div>
  )
}
export default Anecdote
