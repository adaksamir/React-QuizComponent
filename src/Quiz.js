import React, { Component } from 'react'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1 
        }
        console.log(quizData);
    }
    render() {
        const quizjsx = quizData.quiz_questions.map(quiz => <div key={quiz.id}>{quiz.instruction_text}</div>);
        console.log('quiz', quizjsx)
        return (
            <div>
                <div className="QuizQuestion">{quizjsx}</div>
            </div>
        )
    }
}

export default Quiz
