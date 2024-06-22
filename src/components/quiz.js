import React from 'react';
import { useState } from 'react';
import { quizQues  } from '../data/quizData';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(quizQues[index])

    
    return (
        <div className='quiz'>
                <h1> Quiz </h1>
                {/* <hr/>
                <h2>{index + 1}. {question.question} </h2>
                <ul>
                    <li> {question.option1}</li>
                    <li> {question.option2} </li>
                </ul>
                <button>Next</button>

                <div className='index'>1 of 4 Questions</div> */}
            </div>



        
    )
        
    
};

export default Quiz;