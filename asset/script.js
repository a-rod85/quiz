const quiz = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score');

const titles = ['Books', 'Film', 'Music', 'Video Games'];
// 10 = Books
// 11 = Film
// 12 = Music
// 15 = Video Games

const levels = ['easy', 'medium', 'hard'];

function addGenre() {
  titles.forEach(title => {
    const column = document.createElement('div');
    column.classList.add('genre-column');
    //column.append(quiz)
    column.innerHTML = title;
    if (title === 'Books') {
      category = 10;
    }
    if (title === 'Film') {
      category = 11;
    }
    if (title === 'Music') {
      category = 12;
    }
    if (title === 'Video Games') {
      category = 15;
    }
    levels.forEach(level => {
      const card = document.createElement('div');
      card.classList.add('card');
      column.append(card);

      if (level === 'easy') {
        card.innerHTML = 25;
      }

      if (level === 'medium') {
        card.innerHTML = 50;
      }

      if (level === 'hard') {
        card.innerHTML = 100;
      }
      console.log(title + ': ' + category);
      fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=boolean`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          card.setAttribute('data-question', data.results[0].question);
          card.setAttribute('data-answer', data.results[0].correct_answer);
        })
      card.addEventListener('click', cardturns);
    })

    console.log(column);
    quiz.append(column);
  })
}

function cardturns() {
  console.log('clicked');
  const textDisplay = document.createElement('div');
  const trueButton = document.createElement('button');
  const falseButton = document.createElement('button');
  falseButton.innerHTML = 'false';
  trueButton.innerHTML = 'true';
  this.append(textDisplay, trueButton, falseButton);
  textDisplay.innerHTML = this.getAttribute('data-question');
  const allCards = Array.from(document.querySelectorAll('.card'));
  console.log(this);
  console.log(allCards);
  allCards.forEach(card => card.removeEventListener('click', getResult));
}

function getResult() {
  console.log(this);
  if (cardOfButton.getAttribute('data-answer') === this.innerHTML) {
    console.log('Another one!');
  }
  while (cardOfButton.firstChild) {
    cardOfButton.removeChild(cardOfButton.lastChild);
  }
  cardOfButton.innerHTML = cardOfButton.getAttribute('data-value');
}

addGenre();