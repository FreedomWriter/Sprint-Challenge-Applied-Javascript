/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CreateCarousel() {
  //create the elements
  const carousel = document.createElement('div');
  const leftBttn = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightBttn = document.createElement('div');

  //set the content
  mountains.src = "./assets/carousel/mountains.jpeg";
  computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg";
  
  

  //style the content
  carousel.classList.add('carousel');
  leftBttn.classList.add('left-button');
  rightBttn.classList.add('right-button');
  leftBttn.textContent = '<';
  rightBttn.textContent = '>'

  //create the structure
  carousel.appendChild(leftBttn);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightBttn);

  //create an array containing img variable names
  const picArr = [mountains, computer, trees, turntable,];
  // console.log(mountains);
  mountains.style.display = 'flex';
    rightBttn.addEventListener('click', () => {
      
      for (let i=0; i< picArr.length; i++) {
        if (picArr[i].style.display === 'flex' && i !== 3) {
          picArr[i].style.display = 'none';
          picArr[i++];
          picArr[i++].style.display = 'flex';
        } 
      }
  });
  leftBttn.addEventListener('click', () => {
    
    for (let i=0; i< picArr.length; i++) {
      if (picArr[i].style.display === 'flex' && i !== 0) {
        picArr[i].style.display = 'none';
        picArr[i--];
        picArr[i--].style.display = 'flex';
        break;
        
      } 
    }
});
    
  

  return carousel;  
}

const container = document.querySelector('.carousel-container');
const create = CreateCarousel();
container.appendChild(create);