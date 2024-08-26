function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }




  const texts = document.querySelectorAll('.txt p');
  let currentIndex = 0;

  function switchText() {
      texts.forEach((text, index) => {
          text.classList.remove('active');
          text.style.animation = 'textBlink 0.3s ease-out'; // Apply blink effect
          if (index === currentIndex) {
              text.classList.add('active');
          }
      });
      currentIndex = (currentIndex + 1) % texts.length;
  }

  // 3초마다 텍스트 변경
  setInterval(switchText, 2000); // 3000 밀리초 = 3초

  // 초기 텍스트 설정
  switchText();

