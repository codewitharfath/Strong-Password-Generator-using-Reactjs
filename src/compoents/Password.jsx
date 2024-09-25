import React from 'react'
import { useState } from 'react'

const Password = () => {
  const [length,setlength]  = useState(8)
  const [Includeuppercase,setIncludeuppercase] = useState(true)
  const [Includelowercase,setIncludelowercase] = useState(true)
  const [IncludeNumber,setIncludeNumber] = useState(true)
  const [Includesymbol,setIncludesymbol] = useState(true)
  const [password,setpassword] = useState("")

  const handle = ()=>{
    let charset = " ";
    if(Includeuppercase) charset += "ABCDEFGHIJKLMNOPQRSTVWXYZ"
    if(Includelowercase) charset += "abcdefghijklmnopqrstvwxyz"
    if(IncludeNumber) charset += "0123456789"
    if(Includesymbol) charset += "!@#$%^&*()_=+*";
    let generatedpassword = "";
    for(let i=0;i<length;i++){
      const randomindex = Math.floor(Math.random()*charset.length)
      generatedpassword += charset[randomindex]
    }
    setpassword(generatedpassword)

  }
  function handlecopy(){
    navigator.clipboard.writeText(password)
    alert("copy")
  }
  return (
    <>
    <div className="generated-password">
      <h1>strong password Generator</h1>
      <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input type="number" value={length} onChange={(e)=> setlength(parseInt(e.target.value)) } id='num'  />

      </div>
      <div className="input-check">
        <input type="checkbox" id="upper" checked={Includeuppercase} onChange={(e)=> setIncludeuppercase(e.target.checked)} />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="input-check">
        <input type="checkbox" id="lower" checked={Includelowercase} onChange={(e)=> setIncludelowercase(e.target.checked)} />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="input-check">
        <input type="checkbox" id="number" checked={IncludeNumber} onChange={(e)=> setIncludeNumber(e.target.checked)} />
        <label htmlFor="number">Include Number</label>
      </div>
      <div className="input-check">
        <input type="checkbox" id="Symbol" checked={Includesymbol} onChange={(e)=> setIncludesymbol(e.target.checked)} />
        <label htmlFor="Symbol">Include Symbol</label>
      </div>
      <button onClick={handle} className='btn'>Generate Password</button>
      <div className="password-generated">
        <input type="text" readOnly value={password} />
        <button onClick={handlecopy} className='copy'>copy</button>
      </div>
    </div>

    </>
  )
}

export default Password
