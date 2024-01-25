import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizStart = false; // if the quiz should start
  quizEnd = false;   // if the quiz should end
  currentIndex = 0;  // index of the current question
  currentQuestion: any;  // current question item
  questions: any;  // list of questions
  userAnswer?: string; // user's answer, from child component
  disabled?: boolean;   // if the Next button should be disabled
  private score: number = 0;      // the user's score

  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {
        question: 'What is your name?',
        options: ['Kindson', 'Saffron', 'Othniel', 'Osondu'],
        answer: 'Kindson'
      },
      {
        question: 'Where do you Live?',
        options: ['India', 'Hungary', 'USA', 'Nigeria'],
        answer: 'Hungary'
      },
      {
        question: 'Who is PM of India?',
        options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
        answer: 'Mordi'
      }
    ];
  }

  startQuiz() {
    this.quizStart = true;
    this.currentQuestion = this.questions[0];
    this.disabled = true;
  }

  backHome() {
    this.quizStart = false;
    this.quizEnd = false;
  }

  endQuiz() {
    this.quizEnd = true;
  }

  updateScore(){
    if (this.userAnswer === this.questions[this.currentIndex]){
      this.score++;
    }
  }

  goNext() {
    this.disabled = true;
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];

    if (this.currentIndex === this.questions.length) {
      this.endQuiz();
    }
  }

  receiveAnswer(receivedAnswer:string) {
    this.userAnswer = receivedAnswer;
  }

  optionSelected(disabled:boolean) {
    console.log(disabled);
    this.disabled = disabled;
  }
}
