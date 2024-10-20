
import './App.css'
import Counter from './Counter'

function App() {

function handleClick(){
  alert('button clicked')
}

const handleClick3=()=>{
  alert('button 3 is clicked')
}

const addToFive= (num) =>{
  alert(num+5)
}
  return (
    <>
     <h3>React core concepts 2</h3>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={()=>{alert('Button was clicked')}}>Click2</button>
     <button onClick={handleClick3}>Click3</button>
     <button onClick={()=>addToFive(3)}>Click4</button>
     <button onClick={function handleCLick4(){
      alert('Fifth button is clicked')
     }}>Click5</button>

<Counter></Counter>
    </>
  )
}

export default App
