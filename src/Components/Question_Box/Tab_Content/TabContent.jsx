import './TabContent.css'
import React from 'react'

function TabContent({reference}) {
  return (
    <div ref={reference} className='tab-content-container'>
        <div className="no-content">
            <div className="sorry-box">
                <h3>Sorry :(</h3>
                <p>This content is not available in your area.</p>
                <a target='blank' href="https://nordvpn.com/"><button>Get Nord VPN</button></a>
            </div>
        </div>
    </div>
  )
}

export default TabContent