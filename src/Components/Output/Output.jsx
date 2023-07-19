import './Output.css';
import React, { useEffect, useRef, useState } from 'react';

function Output({question, compilerOutput, loader, finalOutput}) {
    // const [caseNumber, setCaseNumber] = useState(0);
    const [testCase, setTestCase] = useState(question.test_cases[0]);
    const case_list = useRef(null)
    
    useEffect(() => {
        const all_buttons = case_list.current.childNodes;
        // all_buttons[0].classList.add('active');
        all_buttons[0].click();
    }, [question]);
    
    function changeTestCase(e, id){
        const all_buttons = case_list.current.childNodes;
        
        // Remove active from all buttons.
        for(let i=0; i<all_buttons.length; i++){
            all_buttons[i].classList.remove('active');
        }

        // Make current button active.
        e.target.classList.add("active");
        id = parseInt(id);
        setTestCase(question.test_cases[id - 1])
    }


  return (
    <div className='output-container'>
        <div className="in-container test-case-container">
            <h4>Test Cases</h4>
            <div ref={case_list} className="case-list">
                {question.test_cases.map(each => {
                    return <button onClick={(e) => changeTestCase(e, each.id)} key={each.id}>Case {each.id}</button>
                })}
            </div>
            <div className="case-details">
                <div className="input">
                    <h6>Input</h6>
                    <div className="input-box">
                        {testCase.input.map(each => {
                            return <p key={testCase.input.indexOf(each)} >{each}</p>
                        })}
                    </div>
                </div>
                <div className="output">
                    <h6>Expected Output</h6>
                    <div className="output-box">
                        {testCase.output.map(each => {
                            return <p key={testCase.output.indexOf(each)} >{each}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='spacer'></div>
        <div className="in-container result-container">
            <h4>Result</h4>
            <div className="code-runner">
                <div className="code-output">
                    <div ref={loader} className="running-loader hidden">
                        <span className="loader"></span>
                        <h3>Running Code ...</h3>
                    </div>
                    {Object.keys(compilerOutput.split('\n')).map(key => {
                        return <p key={key}>{compilerOutput.split('\n')[key]}</p>
                    })}
                </div>
            </div>
            <div className="final-result">
                {Object.keys(finalOutput).map(key => {
                    return <p key={key}>{finalOutput[key]}</p>
                })}
                {/* <p>TEST RUN FAILED</p> */}
            </div>
        </div>
    </div>
  )
}

export default Output