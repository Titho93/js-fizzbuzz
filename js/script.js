const squareContainer = document.querySelector('.squares');
for(let i = 1; i <= 100; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.append(i);

  if(!(i % 3)){
    square.classList.add('green');
  }

  if(!(i % 5)){
    square.classList.add('yellow');
  }

  if(!(i % 15)){
    square.classList.add('red');
  }
  
  squareContainer.append(square);
}
