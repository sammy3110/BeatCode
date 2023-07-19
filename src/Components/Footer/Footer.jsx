import './Footer.css';
import React from 'react';

function Footer({executeCode, all_questions, questionNumber, previousQuestion, nextQuestion, pickAnyQuestion}) {
  const total_question = Object.keys(all_questions).length
  return (
    <div className='footer-container'>
        <div className="left">
            <button>
                <i className="fa-solid fa-list"></i> Problems
            </button>
            <button onClick={pickAnyQuestion}>
                <i className="fa-solid fa-arrow-down-up-across-line"></i> Pick One
            </button>
            <div className="pick-one">
                <button onClick={previousQuestion}>
                    &lt;  Prev
                </button>
                <p>{questionNumber} / {total_question}</p>
                <button onClick={nextQuestion}>
                   Next  &gt; 
                </button>
            </div>
        </div>
        <div className="right">
            <button onClick={executeCode}>
                <i className="fa-solid fa-play"></i> Run Code
            </button>
            <button className='submit'>
                Submit
            </button>
        </div>
    </div>
  )
}

export default Footer