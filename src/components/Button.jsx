import React from 'react'

function Button({clickhandler,label}) {
  return (
       <button onClick={clickhandler} style={{border : "1px solid white", backgroundColor : "blue" , color : "wheat",fontFamily :"cursive",fontSize:"20px",margin:"15px ",padding:"5px 15px",borderRadius:"5px" }}>{label}</button>
  )
}

export default Button