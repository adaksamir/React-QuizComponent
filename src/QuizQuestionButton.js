import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

class QuizQuestionButton extends Component {
    render() {
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton
