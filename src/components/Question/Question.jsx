import Opening from '../Opening/Opening.jsx'
import { questions } from '../../question.js'
import Result from '../Result/Result.jsx'
import React from 'react';
import './Question.css'

function Question({question, Answer, step, Back, Next, number, answerList}){

    return(
          <>
              <div className='container-inner' style={step === number ? {display: 'flex'} : {display: 'none'}}>
                {number === 5 ?(
                    <Result Back={Back} answerList={answerList}/>
                 ) : (
                    <>
                    <div className='container-inner-content'>
                        <div className="question">
                        <div className="question-number">
                            Вопрос {step+1}/{questions.length}
                        </div>
                        <div className="question-text">
                            {question.title}
                        </div>
                        </div>
                        {question.variants ? (<div className="variants" style={number===3?{height:'310px', marginBottom:'53px'}:{height:'203px'} }>
                            {question.variants.map((text, index) => (
                            <label onClick={(e) => Next(number, index, step)} key={text} className='variant'>
                                <input name={number} type="radio" className='variant-input' />
                                <div className='variant-click'></div>{text}
                            </label>
                            ))}
                        </div>) : (
                            <div className='variants-image'>
                            {question.variantsImage.map((props, index) => (
                            <label onClick={() => Next(number, index)} className='variant-image' key={props.text}>
                                <div className='variant-image-img'>
                                <img src={props.image} alt={props.text} />
                                <input type="radio" name={step} className='variant-image-input'/>
                                <div className="variant-image-price">{props.price}</div>
                                </div>
                                <div className='variant-image-text'>{props.text}</div>
                            </label> ))}
                            </div>
                        )}
                        <div className="control-button">
                            <button onClick={() => Next(number)} className='next-question'>Следующий вопрос</button>
                            <button onClick={() => Back()} className='back-question'>Назад</button>
                        </div>
                    </div>
                        <div className="recommendations">
              
                            <div className='recommendations-inner' key={question.recommendations.text}>
                            <div className='recommendations-inner-text'>
                                <div>{question.recommendations.text}</div>
                            </div>
                            <div className='recommendations-inner-content'>
                                <div className='recommendations-inner-content-first'>
                                <div className='recommendations-image'>
                                    <img src={question.recommendations.image} alt="oh" />
                                </div>
                                <div>После прохождения опроса вы получите подборку кроваток нужной конструкции</div>
                                </div>
                                <div className='recommendations-inner-content-two'>
                                <div className='recommendations-image static'>
                                    <img src="https://static.tildacdn.com/tild6131-3131-4631-b534-613630323837/1234_1.png" alt="" />
                                </div>
                                <div>Расчет стоимости в мессенджерах</div>
                                </div>
                            </div>
                            </div>
              
                        </div>
                    </>
              
                    )}
                    </div>
          </>
            
    )
}

export default React.memo(Question)