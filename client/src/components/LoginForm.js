import { useState } from "react"

function LoginForm({onLogin}) {
  const [walletKey, setWalletKey] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        "wallet_key": walletKey, 
        password
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(walletKey => onLogin(walletKey))
      } else {
        r.json().then(record => setErrors(record.errors))
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-field'>
        <label>Wallet Key
        <input 
          value={walletKey}
          onChange={e => setWalletKey(e.target.value)}
          type='text'
          className="form-input"
        />
        </label>
      </div>
      <div className='form-field'>
        <label>Password
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className="form-input"
          />
        </label>
      </div>
      <div className='button-wrapper'> 
        <button type='submit' className='button'>Log In</button> 
      </div>
      
      {errors.map(err => (
        <div key={err} className='error'>🗙 {err}</div>
      ))}
    </form>
  )
}

export default LoginForm