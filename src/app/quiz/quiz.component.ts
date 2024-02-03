import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {getQuestions} from '../../assets/questions'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Output() gameQuited = new EventEmitter<boolean>()
  curDate = new Date();
  quizStart = false; // if the quiz should start
  quizEnd = false;   // if the quiz should end
  currentIndex = 0;  // index of the current question
  currentQuestion: any;  // current question item
  questions: any;  // list of questions
  userAnswer?: string; // user's answer, from child component
  disabled?: boolean; // if the Next button should be disabled
  score: number = 0; // the user's score
  //currentQuiz: {}
  disableNextButton?: boolean = false;
  disablePreviousButton?: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.curDate = new Date(0, 0,0,0,0,0)
    setInterval(() => this.numIncrement(), 1000)
    this.questions = getQuestions();
    console.log(this.questions);
  }

  startQuiz() {
    this.quizStart = true;
    this.currentQuestion = this.questions[0];
    this.disabled = true;
  }

  backHome() {
    this.gameQuited.emit(true)
  }

  endQuiz() {
    this.quizEnd = true;
  }

  updateScore(){
    if (this.userAnswer === this.questions[this.currentIndex].answer){
      this.score++;
    }
  }

  goNext() {
    this.updateScore();
    //this.disabled = true;
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];

    this.disableNextButton = this.currentQuestion.id === this.questions.length;
    this.disablePreviousButton = this.currentQuestion.id === 1

  }

  goPrevious() {
    this.updateScore();
    //this.disabled = true;
    this.currentIndex--;
    this.currentQuestion = this.questions[this.currentIndex];

    this.disablePreviousButton = this.currentQuestion.id === 1;
    this.disableNextButton = this.currentQuestion.id === this.questions.length;
  }

  receiveAnswer(receivedAnswer:string) {
    this.userAnswer = receivedAnswer;
    this.currentQuestion.userAnswer = receivedAnswer;
  }

  optionSelected() {
    //this.disabled = disabled;
  }

  quitClicked() {
    this.gameQuited.emit(true);
  }

  private numIncrement() {
    this.curDate = this.addSeconds(this.curDate, 1)
  }

  addSeconds = (date: Date, seconds: number): Date => {
    const result = new Date(date);
    result.setSeconds(seconds + result.getSeconds());
    return result;
  };

  finishQuiz() {
    this.endQuiz();
  }
}
