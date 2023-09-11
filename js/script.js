const squareContainer = document.querySelector('.squares');
for(let i = 1; i <= 100; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.append(i);
  
  squareContainer.append(square);
}
