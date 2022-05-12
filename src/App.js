import React, { useState } from "react";

import Tasks from './components/Tasks'
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed:false
    },
    {
    id:'2',
    title: 'Ler Livros'
    },
    {
    id:'3',
    title: 'Ler Livros'
    },
  ])

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
      {/* <button onClick={() => setMessage('peido')}>pinto</button> */}
    </>
  );
}

export default App;
