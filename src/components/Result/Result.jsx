import './Result.css'
import { questions } from '../../question';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/photo_5256103311407439148_y.png';


const TELEGRAM_BOT_TOKEN = '6380222672:AAFlYP_-5fYTY3U8661exfH4Tp6am2a0GlE';
const TELEGRAM_CHAT_ID = '6598172789';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendMessage(event, answerList, navigate) {
    event.preventDefault();
    
    const form = event.target
    const formBtn = form.querySelector('button[type="submit"]')
    
    const {name, phone} = Object.fromEntries(new FormData(form).entries());
    
    const text = `1: ${questions[0].variants[answerList[0]]} \n2: ${questions[1].variants[answerList[1]]} \n3: ${questions[2].variants[answerList[2]]} \n4: ${questions[3].variants[answerList[3]]} \n5: ${questions[4].variantsImage[answerList[4]].text} \nИмя: ${name} \nТелефон: ${phone}`;
    
    try {
        formBtn.textContent = 'Отправка...';
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text
            })
        });
        if (response.ok) {
            navigate('/ending');
            console.log('Спасибо за заявку!');
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        formBtn.textContent = 'Получить расчёт и подборку';
    }
}

export default function Result({Back, answerList}){
    const navigate = useNavigate();
    
    return(
        <div className="result">
        <div className="result-inner">
            <div className="result-gratitude">
                Спасибо за ответы!
            </div>
            <div className="result-content">
                <div className='result-content-inner'>
                    <div className="result-content-textbox">
                        Почти готово. Мы отправим Вам подборку с ценами в WhatsApp в самое ближайшее время.
                    </div>
                    <img className='result-img' src={img} alt="" />
                    <form onSubmit={() => sendMessage(event, answerList, navigate)} className="result-form">
                        <div className="form-input">
                            <input className='form-input-name' name='name' type="text" required placeholder="Ваше имя"/>
                            <input className='form-input-tel' name='phone' type="tel" required placeholder="Ваш номер" />
                        </div>
                        <div className="form-label">
                            <label>
                                <input required type="checkbox" />
                                Я принимаю условия политики конфиденциальности
                            </label>
                        </div>
                        <div className="form-button">
                            <button type='submit' className="send-info-btn">Получить расчёт и подборку</button>
                            <button type='button' onClick={() => Back()} className='result-back-question'>Назад</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }