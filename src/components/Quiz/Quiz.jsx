import { questions } from '../../question.js'
import { useForm } from 'react-hook-form'
import Question from '../Question/Question.jsx'
import Opening from '../Opening/Opening.jsx'
import img1 from '../../assets/Erkins-18.jpg'
import img2 from '../../assets/DSC01622-редакт.jpg'
import img3 from '../../assets/DSC01633-редакт.jpg'
import img4 from '../../assets/Erkins-15.jpg'
import img5 from '../../assets/Erkins-18.jpg'
import img6 from '../../assets/Erkins-18.jpg'
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
      <div className="background-image" style={step === 0 || step === 2 || step === 4 ? {backgroundImage: `url(${img1})`} : {backgroundImage: `url(${img2})`}}>
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