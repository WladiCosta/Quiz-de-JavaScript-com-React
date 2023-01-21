
import './GameOver.css'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Welldone from '../images/welldone.svg'
import './GameOver.css'

const GameOver = () => {
  
  const [quizState, dispatch] = useContext(QuizContext)
  
  return(
      <div className="game-over">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <img src={Welldone} alt="Fim de jogo!"/>
        <button onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
      </div>
    )
}

export default GameOver