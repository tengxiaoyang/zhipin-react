import React, { useState, useEffect } from 'react';
import './demo.css';

export default function Demo(props) {
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

  const checkThis = (item) => {
    item.checked = !item.checked;
    if (item.name === '全选') {
      if (item.checked) {
          state.checklist.forEach(i => {
              i.checked = true;
          })
      } else {
          state.checklist.forEach(i => {
              i.checked = false;
          })
      }
    }

    let result = state.checklist.some(j => {
        if (!j.checked) {
            return true;
        }
    })

    if (result) {
        state.checklist[0].checked = false;
    }
    
    let len = state.checklist.length
    let ev = true;
    for (let i = 1; i < len; ++ i) {
        if (!state.checklist[i].checked) {
            ev = false;
        }
    }
    if (ev) {
        state.checklist[0].checked = true;
    }
    setState({
      checklist:state.checklist
    })
  }

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