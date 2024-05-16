import React, { useState } from 'react'
import { data } from './data';
import "./style.css"

export default function Accordian() {
    const [selected, setSelected ] = useState(null);
    
    function handleSingleSelection(currentId){
        setSelected(currentId === selected ? null : currentId)
    }

  return (
    <div className='wrapper'>
        <div className='accordian'>
            {
                data && data.length > 0 ?
                data.map(dataItem => <div className='item'>
                    <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className='content'>{dataItem.answer}</div>
                        : null
                    }
                    </div>)
                    
                : <div> No data found</div>
            }
        </div>
    </div>
  )
}
