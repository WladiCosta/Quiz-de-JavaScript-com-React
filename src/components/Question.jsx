import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Options from './Options.jsx'

import './Question.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  
  const onSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {answer: currentQuestion.answer, option}
    })}
  
  return(
    <div className="questions">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Options 
          option={option} 
          key={option} 
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption(option)}/>
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</button>
      )}
    </div>
    )
}

export default Question