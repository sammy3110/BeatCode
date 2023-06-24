import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="left">
            <button>
                <i class="fa-solid fa-list"></i> Problems
            </button>
            <button>
                <i class="fa-solid fa-arrow-down-up-across-line"></i> Pick One
            </button>
            <div className="pick-one">
                <button>
                    &lt;  Prev
                </button>
                <p>289 / 2458</p>
                <button>
                   Next  &gt; 
                </button>
            </div>
        </div>
        <div className="right">
            <button>
                <i class="fa-solid fa-play"></i> Run Code
            </button>
            <button className='submit'>
                Submit
            </button>
        </div>
    </div>
  )
}

export default Footer