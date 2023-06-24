import './App.css';
import CodingBox from './Components/Coding_Box/CodingBox';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import QuestionBox from './Components/Question_Box/QuestionBox';
// import TitleBar from './Components/Title_bar/TitleBar';

function App() {


return (
    <div className="App">
      <div className="center-container">
        <Navbar/>
        {/* <TitleBar/> */}
        <div className="app-main">
          <QuestionBox/>
          <p className='spacer'></p>
          <CodingBox/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
