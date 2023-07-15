import React, { useState } from 'react'

function Theme() {

    const [theme, setTheme] = useState(false);

    const change = ()=> {
        setTheme(!theme)
    }
  return (
    
    <div className = {`Theme ${theme ? 'dark' : 'white'}`}>
        <button onClick={change}>Change Theme</button>
    </div>
    
  )
}

export default Theme