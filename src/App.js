import React, {useState} from 'react'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Welcome ${name}!`)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="Welcome-User">
      <h1>Enter Name Below</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input type="text" id="name" name='name' placeholder='Han Solo' value={name} onChange={handleChange}></input>
      <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
