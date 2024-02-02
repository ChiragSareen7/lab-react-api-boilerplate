import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then((res) => {
      console.log(res);
      setData(res.data.books);
    })
    .catch((err) => console.log(err))
}, []);  
  return (
    <div>
      {data.map((book, index) => (
        <div key={index}>
          <h1>{book.title}</h1>
          <img src={book.imageLinks.thumbnail} />
          <h2>{book.authors}</h2>
          <h4>{book.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default App;

