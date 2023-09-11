const squareContainer = document.querySelector('.squares');
for(let i = 1; i <= 100; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  if ((!(i % 3)) && (!(i % 5))){
    square.classList.add('red');
    square.append('Fizzbuzz');
  }else if(!(i % 3)){
    square.classList.add('green');
    square.append('Fizz');
  }else if(!(i % 5)){
    square.classList.add('yellow');
    square.append('Buzz');
  }else {
    square.append(i)
  }
  
  squareContainer.append(square);
}
