
import './App.css'

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read a book" },
  { id: 3, title: "Take a rest" }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todo List</h1>
     <ul>
        {}
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
     </ul>
     </>
  )
}

export default App
