import { questions } from '../../question.js'
import Question from '../Question/Question.jsx'
import Opening from '../Opening/Opening.jsx'
import './Quiz.css'

export default function Quiz({question, Answer, setStep, step, Back, Next, answerList}){


  if (step === -1){
    return(<Opening Answer={Answer}/>)
  }

  let percentage = 0
  if (step >= 6) {
    percentage = 100
  } else{
    percentage = Math.round((step / questions.length * 100))
  }

  return(
    <>  
      <div className="background-image" style={step === 1 || step === 3 || step === 5 ? {opacity: `1`} : {opacity: `0`}}>
        <div className='background-inner'></div>
      </div>
      <div className="background-image-two" style={step === 0 || step === 2 || step === 4 || step === 6 ? {opacity: `1`} : {opacity: `0`}}>
        <div className='background-inner'></div>
      </div>

      <div className="game">
        <div className="container">
          <div className='progress-bar'>
            <div className="progress">
              <div style={{width: `${percentage}%`}} className="progress-inner"></div>
            </div>
            <span>{percentage}%</span>
          </div>
            <Question answerList={answerList} question={questions[0]} Answer={Answer} step={step} number={-1} Back={Back} Next={Next}/>
            <Question answerList={answerList} question={questions[0]} Answer={Answer} step={step} number={0} Back={Back} Next={Next}/>
            <Question answerList={answerList} question={questions[1]} Answer={Answer} step={step} number={1} Back={Back} Next={Next}/>
            <Question answerList={answerList} question={questions[2]} Answer={Answer} step={step} number={2} Back={Back} Next={Next}/>
            <Question answerList={answerList} question={questions[3]} Answer={Answer} step={step} number={3} Back={Back} Next={Next}/>
            <Question answerList={answerList} question={questions[4]} Answer={Answer} step={step} number={4} Back={Back} Next={Next}/>
            <Question answerList={answerList} step={step} number={5} Back={Back} setStep={setStep}/>
        </div>
      </div>
    </>
  )
}