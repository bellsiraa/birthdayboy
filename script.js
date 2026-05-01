
function openLetter(){
  document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter(event){
  event.stopPropagation();
  document.getElementById("letterPopup").style.display = "none";
}

window.onclick = function(e){
  const popup = document.getElementById("letterPopup");
  if(e.target === popup){
    popup.style.display = "none";
  }
}

const heartsContainer = document.querySelector('.hearts');

function createHeart(){
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');

  heart.innerHTML = '❤';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
