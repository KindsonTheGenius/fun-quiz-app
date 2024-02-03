let questions: any[];
questions = [
    {
    id: 1,
      question: 'What is your name?',
    options: ['Kindson', 'Saffron', 'Othniel', 'Osondu'],
    answer: 'Kindson',
    userAnswer: ''
  },
  {
    id: 2,
      question: 'Where do you Live?',
    options: ['India', 'Hungary', 'USA', 'Nigeria'],
    answer: 'Hungary',
    userAnswer: ''
  },
  {
    id: 3,
      question: 'Who is PM of India?',
    options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
    answer: 'Mordi',
    userAnswer: ''
  }
]

export function getQuestions() {
  return questions;
}
