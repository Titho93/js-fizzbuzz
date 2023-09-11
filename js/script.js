const squareContainer = document.querySelector('.squares');
for(let i = 1; i <= 100; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.append(i);


  if(!(i % 3)){
    square.classList.add('green');
    square.textContent = 'Fizz';
  }

  if(!(i % 5)){
    square.classList.add('yellow');
    square.textContent = 'Buzz';
  }

  if((!(i % 3)) && (!(i % 5))){
    square.classList.add('red');
    square.textContent = 'Fizzbuzz';
  }
  
  squareContainer.append(square);
}
