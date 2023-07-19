import './CodingBox.css'
import React from 'react'

function CodingBox({all_languages, setLanguage, code, setCode}) {
  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div className='coding-box-container'>
      <div className="tab">
        {/* ...................... */}

        <div className="tab-left">
          <div className="select">
            <i className="fa-solid fa-code"></i>
            <select onChange={changeLanguage} id="standard-select">
              {all_languages.map(each => {
                return <option key={each.id} value={each.id}>{each.name}</option>
              })}
            </select>
          </div>

          <div className="auto-complete">
            <i className="fa-solid fa-circle-dot"></i>
            <p>Autocomplete</p>
          </div>
        </div>

        {/* ...................... */}

        <div className="tab-right">
          <i className="fa-solid fa-code"></i>
          <i className="fa-solid fa-arrow-rotate-left"></i>
          <i className="fa-solid fa-gear"></i>
        </div>

        {/* ...................... */}
      </div>
      <textarea onChange={(e) => setCode(e.target.value)} value={code} placeholder='Please select the language and pase your code here.'></textarea>
    </div>
  )
}

export default CodingBox