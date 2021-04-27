import React, { useState, useEffect } from 'react';
import './demo.css';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="Demo">
      {
        this.state.checklist.length
        ?
          this.state.checklist.map((item, index) => {
            return (
              <div key={index}>
                <label>
                  <input 
                    type="checkbox" 
                    onChange={() => this.checkThis(item)} 
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