import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() receivedQuestion: any;
  @Output() userAnswer = new EventEmitter<string>();
  @Output() disable = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // when user selects an answer
  setUserAnswer(option: string){
    this.userAnswer.emit(option);
    this.disable.emit(false);
  }
}
