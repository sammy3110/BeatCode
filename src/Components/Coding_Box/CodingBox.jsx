import './CodingBox.css'
import React from 'react'

function CodingBox() {
  return (
    <div className='coding-box-container'>
      <div className="tab">
        {/* ...................... */}

        <div className="tab-left">
          <div class="select">
            <i class="fa-solid fa-code"></i>
            <select id="standard-select">
              <option value="Option 1">Python</option>
              <option value="Option 2">C++</option>
              <option value="Option 3">C</option>
              <option value="Option 4">Java</option>
              <option value="Option 5">JS</option>
            </select>
          </div>

          <div className="auto-complete">
            <i class="fa-solid fa-circle-dot"></i>
            <p>Autocomplete</p>
          </div>
        </div>

        {/* ...................... */}

        <div className="tab-right">
          <i class="fa-solid fa-code"></i>
          <i class="fa-solid fa-arrow-rotate-left"></i>
          <i class="fa-solid fa-gear"></i>
        </div>

        {/* ...................... */}
      </div>
      <textarea placeholder='Please select the language and pase your code here. I am not smart enough to detect the language :('></textarea>
    </div>
  )
}

export default CodingBox