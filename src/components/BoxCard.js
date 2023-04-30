import React from 'react'
import { useState } from 'react';

export const BoxCard = ({result, children}) => {
    const [hide, setHide] = useState(true);
  return (
    <div className={hide ? "" : "hidden"}>
        <div className={`box ${result}`}>
            {children}
            <button className='trigger' onClick={()=>setHide(!hide)}>Hide</button>
        </div>
    </div>
  )
}
