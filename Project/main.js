function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }




  const texts = document.querySelectorAll('.txt p');
  let currentIndex = 0;

  function switchText() {
      texts.forEach((text, index) => {
          text.classList.remove('active');
          if (index === currentIndex) {
              text.classList.add('active');
          }
      });
      currentIndex = (currentIndex + 1) % texts.length;
  }

  // 2초마다 텍스트 변경
  setInterval(switchText, 1000);

  // 초기 텍스트 설정
  switchText();

