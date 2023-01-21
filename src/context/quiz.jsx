import { createContext, useReducer } from 'react'

import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
  gameStage: STAGES[0],
  questions
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        gameStage: STAGES[1],
        questions,
        currentQuestion: 0,
        score: 0,
        answerSelected: false,
      }
      
      case 'REORDER_QUESTIONS':
        const reorderedQuestions = state.questions.sort(() => {
          return Math.random() - 0.5
        })
        return {
          ...state,
          questions: reorderedQuestions,
        }
        
        case 'CHANGE_QUESTION':
          const nextQuestion = state.currentQuestion + 1
          let endGame = false
          
          if (!questions[nextQuestion]) {
            endGame = true
          }
          
          return{
            ...state,
            currentQuestion: nextQuestion,
            gameStage: endGame ? STAGES[2] : state.gameStage,
            answerSelected: false
          }
          
          case 'NEW_GAME':
            return initialState
          
          case 'CHECK_ANSWER':
            
            if (state.answerSelected) return state;
            
            const answer = action.payload.answer
            const option = action.payload.option
            let correctanswer = 0
            
            if (answer === option) correctanswer = 1;
            
            return{
              ...state,
              score: state.score + correctanswer,
              answerSelected: option
            }
            
      
    
          default:
            return state
  }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
 
  const value = useReducer(quizReducer, initialState)
  
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}