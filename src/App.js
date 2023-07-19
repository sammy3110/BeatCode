import './App.css';
import CodingBox from './Components/Coding_Box/CodingBox';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import QuestionBox from './Components/Question_Box/QuestionBox';
import { getCodeOutput } from './API/Compiler';
import { useRef, useState } from 'react';
import Output from './Components/Output/Output';
import all_questions from './Questions/Questions.json';


function App() {

  const [language, setLanguage] = useState("python3");
  const [code, setCode] = useState("");
  const [compilerOutput, setCompilerOutput] = useState("No run detected.");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(all_questions[questionNumber]);
  const loader = useRef();
  const [finalOutput, setFinalOutput] = useState(["No run detected."]);
  const all_languages = [
    {
      id: 'python3',
      name: 'Python 3'
    },
    {
      id: 'cpp',
      name: 'C++'
    },
    {
      id: 'c',
      name: 'C'
    },
    {
      id: 'java',
      name: 'Java'
    },
    {
      id: 'kotlin',
      name: 'Kotlin'
    }
  ];


  // ............ Utility Functions ............

  function nextQuestion() {
    const total_question = Object.keys(all_questions).length

    if(questionNumber+1 > total_question) setQuestion(all_questions[questionNumber]);
    else setQuestion(all_questions[questionNumber + 1]);

    setQuestionNumber(pre => {
      if(pre + 1 > total_question) return pre;
      return pre + 1;
    });
  }
  
  function previousQuestion() {
    if(questionNumber-1 < 1) setQuestion(all_questions[questionNumber]);
    else setQuestion(all_questions[questionNumber - 1]);

    setQuestionNumber(pre => {
      if(pre - 1 < 1) return pre;
      return pre - 1;
    });
  }

  function pickAnyQuestion() {
    const total_question = Object.keys(all_questions).length
    const rand = Math.floor(Math.random() * total_question) + 1;
    setQuestionNumber(rand);
    setQuestion(all_questions[rand]);
  }

  async function executeCode(){
    setFinalOutput([]);
    if(code === ""){
      setCompilerOutput(`Please write some ${language} code in the editor.`);
      return;
    }
    else
      setCompilerOutput("");
    
    const expected_output = [];
    const compiler_output = [];

    // For each test case
    for(let i=0; i<question.test_cases.length; i++){
      setCompilerOutput(pre => {
        return pre + `\nTest Case ${i+1} output\n`;
      })
      const input = question.test_cases[i].input.join("\n");
      expected_output.push(question.test_cases[i].output.join("\n") + '\n');

      // Run the code.
      loader.current.classList.remove('hidden');
      const compiler_response = await getCodeOutput(language, code, input);
      loader.current.classList.add('hidden');
      compiler_output.push(compiler_response.output);

      // Set the output.
      setCompilerOutput(pre => {
        return pre + compiler_response.output + "\n";
      });
    }

    // Check final result.
    if(expected_output === compiler_output){
      setFinalOutput([
        "TEST RUN PASSED",
        "Expected Output",
        expected_output.join("\n"),
        "",
        "Your Output",
        compiler_output.join("\n"),
      ]);
    }
    else {
      setFinalOutput([
        "TEST RUN FAILED",
        "Expected Output",
        expected_output.join("\n"),
        "",
        "Your Output",
        compiler_output.join("\n"),
      ]);
    }
  }


  // ............ Return the JSX ............

  return (
      <div className="App">
        <div className="center-container">
          <Navbar/>
          <div className="app-main">
            <QuestionBox question={question}/>
            <p className='spacer'></p>
            <CodingBox all_languages={all_languages}  setLanguage={setLanguage} code={code} setCode={setCode}/>
          </div>
          <Output loader={loader} question={question} compilerOutput={compilerOutput} finalOutput={finalOutput}/>
          <Footer executeCode={executeCode} all_questions={all_questions} questionNumber={questionNumber} nextQuestion={nextQuestion} previousQuestion={previousQuestion} pickAnyQuestion={pickAnyQuestion}/>
        </div>
      </div>
    );
}

export default App;
