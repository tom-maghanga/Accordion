import React, { useState } from 'react'
import { data } from './data';
import "./style.css"

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelect, setMultiSelect] = useState([]);
    
    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiSelection(currentId) {
        let cpyMultiple = [...multiSelect];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiSelect(cpyMultiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>

            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className='item' key={dataItem.id}>
                                <div 
                                    onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                                    className='title'>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {enableMultiSelection ?
                                    multiSelect.indexOf(dataItem.id) !== -1 && (
                                        <div className='content'>{dataItem.answer}</div>
                                    )
                                    :
                                    selected === dataItem.id && (
                                        <div className='content'>{dataItem.answer}</div>
                                    )
                                }
                            </div>
                        ))
                        : <div>No data found</div>
                }
            </div>
        </div>
    );
}
