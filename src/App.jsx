import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //reducer function definion. this function by default pass two parameters. one is state another is action.
  let reducer=(state,action)=>{
    switch (action.type)
    {
      case "increament" : return {count:state.count+1}
      case "decreament" : return {count:state.count-1}
      case "reset"      : return {count:0}
      default : return state
    }
  }
 let [state,dispatch]= useReducer(reducer, {count:0});
   //reducer is function name, it can be anyname. 
  // useReducer must have two parameters first is function next is state initiate value.
  //Also it returns state and the intermediater dispatch function

  //console.log(state,dispatch)

  return (
    <>
            <h1>Use Reducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        Increase
        </button>
        <p>{count}</p>
        </div>
        <div className="card">
          <button onClick= {() =>dispatch({type:"increament"})}> 
            {//this dispatch name we already declare in useReducer so we have to use that one. this dispatch will call reducer function
             } 
        Increment
        </button>  <button onClick={() =>dispatch({type:"decreament"})}>
        Decreament
        </button>  <button onClick={() =>dispatch({type:"reset"})}>
        Reset
        </button>
        <p>{state.count}</p>
        </div>
    </>
  )
}

export default App
