import React, { useState } from 'react';
import './style.css';

const Todo = () => {
  const [item,setItem] = useState();
  const [arrayItem,setArrayItem] = useState([]);

  const deleteItem = (index) => {
    setArrayItem((oldItems)=>{
      return oldItems.filter((elem,id)=>{
        return id !== index;
      })
    })
  }

  return (
    <div className='parent'>
      <div className='center'>
      <h1>ToDo List App</h1>
      <input type='test' placeholder='add items...' value={item} onChange={(e)=>{setItem(e.target.value)}}/>
      <button className='btn add' onClick={()=>{setArrayItem((oldItems)=>{
        return [...oldItems,item]
      })
      setItem('')}}>+</button>
      
      <ul>
        {arrayItem.map((elem,index) => <li key={index}><button className='btn' onClick={()=>deleteItem(index)}>-</button>{elem}</li>)}
      </ul>
    </div>
    </div>
  );
};

export default Todo;
