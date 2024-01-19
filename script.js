window.addEventListener('load', function() {
    const textElements = document.querySelectorAll('.fade-in');
  
    textElements.forEach(textElement => {
      const distanceFromTop = textElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      const middleOfScreen = windowHeight / 2 + (windowHeight / 4);
  
      if (distanceFromTop < middleOfScreen && distanceFromTop > -middleOfScreen) {
        textElement.classList.add('active');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const textElements = document.querySelectorAll('.fade-in');
  
    textElements.forEach(textElement => {
      const distanceFromTop = textElement.getBoundingClientRect().top;
      const distanceFromBottom = textElement.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  
      // Calculate the position of the middle of the screen
      const topOfScreen = windowHeight / 6;
      const bottomOfScreen = windowHeight / 6 * 5;
  
      if (distanceFromTop < topOfScreen || distanceFromBottom > bottomOfScreen) {
        textElement.classList.add('inactive');
      }else {
        textElement.classList.remove('inactive');
        textElement.classList.add('active');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const textElements = document.querySelectorAll('.fade');
  
    textElements.forEach(textElement => {
      const distanceFromBottom = textElement.getBoundingClientRect().bottom;
      const distanceFromTop = textElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Calculate the position of the middle of the screen
      const bottomOfScreen = windowHeight / 4;
  
      if (distanceFromBottom < bottomOfScreen || distanceFromTop < bottomOfScreen - (bottomOfScreen / 1.5)) {
        textElement.classList.add('inactive');
      }else {
        textElement.classList.remove('inactive');
        textElement.classList.add('active');
      }
    });
  });