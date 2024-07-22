import { useState, useCallback, useEffect } from 'react'
import './App.css'
import { questions } from './question.js'
import Quiz from './components/Quiz/Quiz.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ending from './components/Ending/Ending.jsx'
const answerList = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0
}



function App() {
  const [step, setStep] = useState(-1)
  const question = questions[step]
  const [timeoutId, setTimeoutId] = useState(null);
  const [error, setError] = useState(false);

  function Answer(e, index){
    setStep(prevSet => prevSet + 1)
  }

  
  const Next = useCallback((number, index) => {
    let answer = document.querySelector(`.container-inner input[name="${number}"]:checked`);
    if (answer) {
      if (number < questions.length + 1) {
        // Clear any existing timeouts before setting a new one
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        const id = setTimeout(() => {
          setStep(prevStep => prevStep + 1);
        }, 100);
        setTimeoutId(id);
        setError(false);
      }
    } else {
      setError(true);
    }

    if (index) {
      answerList[number] = index;
    }

  }, [questions.length, timeoutId, step]);

  const Back = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setStep(prevStep => prevStep - 1);
  }, [timeoutId]);

  // Effect to clear timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  // Effect to manage error class
  useEffect(() => {
    const errorElements = document.querySelectorAll('.variants');
    errorElements.forEach(element => {
      if (error) {
        element.classList.add('error');
      } else {
        element.classList.remove('error');
      }
    });
    document.querySelector('.variants-image')?.classList.toggle('error', error);
  }, [error]);

  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<Quiz step={step} Back={Back} setStep={setStep} Answer={Answer} question={question} Next={Next} answerList={answerList}/>} />
          <Route path='/ending' element={<Ending />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
