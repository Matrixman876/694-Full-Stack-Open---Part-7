import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { content: 'If it hurts, do it more often', author:'J. Keriev', info:'', votes:0, id:1 },
    { content: 'Premature optimization is root of evil', author:'D. Knuth', info:'', votes:0, id:2 }
  ])
  const [notification,setNotification]=useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random()*10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`A new anecdote "${anecdote.content}" created!`)
    setTimeout(()=>setNotification(''),5000)
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <div style={{border:'1px solid',padding:10}}>{notification}</div>}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
