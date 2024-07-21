import './Opening.css'

export default function Opening({Answer}) {
    return (
        <div className='opening'>
            <div className='opening-background'>
                <div className='opening-background-inner'></div>
            </div>
            <div className='opening-content'>
                <div className="opening-content-inner">
                    <div className="opening-content-inner-textbox">
                        <h1 className='opening-content-inner-textbox-title'>ПОЛУЧИТЕ ПРЕДВАРИТЕЛЬНУЮ СТОИМОСТЬ ВАШЕГО МАТРАСА В НЕСКОЛЬКО КЛИКОВ</h1>
                        <h3 className='opening-content-inner-textbox-subtitle'>Ответьте на 5 вопросов и получите подборку моделей и расчет стоимости по вашим параметрам в WhatsApp</h3>
                    </div>
                    <button onClick={() => Answer()} className='opening-content-inner-button'>ПОЛУЧИТЬ ПОДБОРКУ И СТОИМОСТЬ</button>
                    <div className="opening-content-inner-qualities">
                        <div className="opening-content-inner-quality">
                            <div className="opening-content-inner-quality-title">
                                8 из 10
                            </div>
                            <div className="opening-content-inner-quality-text">
                                человек возвращаются к нам за матрасами для всей семьи
                            </div>
                        </div>
                        <div className="opening-content-inner-quality">
                            <div className="opening-content-inner-quality-title">
                                4 из 5
                            </div>
                            <div className="opening-content-inner-quality-text">
                                человек начали высыпаться на наших матрасах
                            </div>
                        </div>
                        <div className="opening-content-inner-quality">
                            <div className="opening-content-inner-quality-title">
                                9 из 10
                            </div>
                            <div className="opening-content-inner-quality-text">
                                наших покупателей утверждают, что забыли про боли в спине
                            </div>
                        </div>
                        <div className="opening-content-inner-quality">
                            <div className="opening-content-inner-quality-title">
                                10
                            </div>
                            <div className="opening-content-inner-quality-text">
                                лет гарантии на наши матрасы
                            </div>
                        </div>
                    </div>
                    <h3 style={{'fontSize': '25px', 'font-weight': '700', margin: '0'}}>ДОСТАВКА И СБОРКА ПО РФ</h3>
                </div>
            </div>
        </div>
    )
}