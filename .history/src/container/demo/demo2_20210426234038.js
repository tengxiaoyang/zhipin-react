import React, { useState, useEffect } from 'react';
import './demo.css';

export default function(props){
  const [state, setState] = useState(
    {
      checklist:[
        {name: '全选', checked: false},
        {name: '111111111', checked: false},
        {name: '222222222', checked: false},
        {name: '333333333', checked: false},
        {name: '444444444', checked: false},
        {name: '555555555', checked: false},
        {name: '666666666', checked: false},
        {name: '777777777', checked: false},
        {name: '888888888', checked: false},
        {name: '999999999', checked: false}
      ]
    }
  )

  useEffect(() => {

  }, [])

  return (
    <div className="Demo">
      {
        state.checklist.length
        ?
          state.checklist.map((item, index) => {
            return (
              <div key={index}>
                <label>
                  <input 
                    type="checkbox" 
                    onChange={() => checkThis(item)} 
                    checked={item.checked}
                  />
                  <span>{item.name}</span>
                </label>
              </div>
            )
          })
        :
          ''
      }
    </div>
  )
}