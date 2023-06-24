import "./QuestionBox.css";
import Description from "./Description/Description";
import React, { useEffect, useRef } from "react";
import TabContent from "./Tab_Content/TabContent";

function QuestionBox() {

  const description = useRef(null);
  const solution = useRef(null);
  const discuss = useRef(null);
  const submissions = useRef(null);
  const description_button = useRef(null);
  const solution_button = useRef(null);
  const discuss_button = useRef(null);
  const submissions_button = useRef(null);
  const tab_list = [description, solution, discuss, submissions]
  const button_list = [description_button, solution_button, discuss_button, submissions_button]
  
  useEffect(() => {
    description_button.current.click();
  })

  function openCity(button, tab) {
    let i;
    // Get all elements in tab_list and hide them.
    for (i = 0; i < tab_list.length; i++) {
      tab_list[i].current.style.display = "none";
    }

    // Get all elements in button_list and remove the class "active".
    for (i = 0; i < button_list.length; i++) {
      button_list[i].current.className = button_list[i].current.className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    tab.current.style.display = "block";
    button.current.className += " active";
  }

  return (
    <div className="question-box-container">
      <div className="tab">
        <button ref={description_button} onClick={() => openCity(description_button, description)}>
        <i class="fa-solid fa-file-lines"></i> <span>Description</span>
        </button>
        <button ref={solution_button} onClick={() => openCity(solution_button, solution)}>
        <i class="fa-solid fa-lock"></i> <span>Solution</span> <i class="fa-regular fa-circle-play"></i>
        </button>
        <button ref={discuss_button} onClick={() => openCity(discuss_button, discuss)}>
        <i class="fa-regular fa-message"></i> <span>Discuss (999+)</span>
        </button>
        <button ref={submissions_button} onClick={() => openCity(submissions_button, submissions)}>
        <i class="fa-regular fa-clock"></i> <span>Submissions</span>
        </button>
      </div>

        <Description className="tabcontent" description={description}/>
        <TabContent className="tabcontent" reference={solution}/>
        <TabContent className="tabcontent" reference={discuss}/>
        <TabContent className="tabcontent" reference={submissions}/>

      {/* <div ref={solution} className="tabcontent">
        <h1>Solution</h1>
      </div> */}

      {/* <div ref={discuss} className="tabcontent">
        <h1>Discuss</h1>
      </div>

      <div ref={submissions} className="tabcontent">
        <h1>Submissions</h1>
      </div> */}
    </div>
  );
}

export default QuestionBox;
