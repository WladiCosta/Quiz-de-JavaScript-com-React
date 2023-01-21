import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../images/quiz.svg'

import './Welcome.css'
const Welcome = () => {
  
  const [quizState, dispatch] = useContext(QuizContext)
  
  return(
    <div className="welcome">
      <h2>Seja Bem-Vindo!</h2>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Inciar</button>
      <img src={Quiz} alt="inicio do quiz"/>
    
    </div>
    )
}

export default Welcome