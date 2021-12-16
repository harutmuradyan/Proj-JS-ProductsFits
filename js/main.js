// Slider

function slyder () {
  let controls = document.querySelectorAll('.controls');
  for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
  }

  let slides = document.querySelectorAll('#slides .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide,1000);

  function nextSlide(){
    goToSlide(currentSlide+1);
  }

  function previousSlide(){
    goToSlide(currentSlide-1);
  }

  function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }


  let playing = true;
  let pauseButton = document.getElementById('pause');

  function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
  }

  pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
  };

  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  next.onclick = function(){
    pauseSlideshow();
    nextSlide();
  };
  previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
  };
}

slyder();

// categpry Slyder 

function categorySlyder() {
  let controls = document.querySelectorAll('.controls');
  for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
  }

  let slides = document.querySelectorAll('#slides1 .slide1');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide,2000);

  function nextSlide(){
    goToSlide(currentSlide+1);
  }

  function previousSlide(){
    goToSlide(currentSlide-1);
  }

  function goToSlide(n){
    slides[currentSlide].className = 'slide1';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide1 showing';
  }


  let playing = true;
  let pauseButton = document.getElementById('pause1');

  function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
  }

  pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
  };

  var next = document.getElementById('next1');
  var previous = document.getElementById('previous1');

  next.onclick = function(){
    pauseSlideshow();
    nextSlide();
  };
  previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
  };
}

categorySlyder();

// companies Slyader()

function companiesSlayder() {
  let controls = document.querySelectorAll('.controls');
  for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
  }

  let slides = document.querySelectorAll('#slides2 .slide2');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide,2000);

  function nextSlide(){
    goToSlide(currentSlide+1);
  }

  function previousSlide(){
    goToSlide(currentSlide-1);
  }

  function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide2 showing';
  }


  let playing = true;
  let pauseButton = document.getElementById('pause2');

  function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
  }

  pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
  };

  var next = document.getElementById('next2');
  var previous = document.getElementById('previous2');

  next.onclick = function(){
    pauseSlideshow();
    nextSlide();
  };
  previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
  };
}

companiesSlayder();

