import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
  <div>
    {anecdotes.map(a => (
      <div key={a.id}>
        <Link to={`/anecdotes/${a.id}`}>{a.content}</Link>
      </div>
    ))}
  </div>
)
export default AnecdoteList
