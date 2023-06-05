import React, {useState} from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {}

  return (
    <form onSubmit={ ()=> {
      alert('Submitted')
    }}>
       <h3>Log In</h3>
      <label for="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@email.com" id="email" name="email" />
      <label for="password">Password</label>
      <input value={password} onChange={(event) => {
        console.log(event)
        console.log(event.target)
        setPassword(event.target.value)}} type="password" placeholder="**********" id="password" name="password" />
      <button>Submit</button>
    </form>
  )
}
