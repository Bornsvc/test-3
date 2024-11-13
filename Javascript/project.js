const sliders = document.querySelectorAll('.image-slider');
    
sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  let currentIndex = 0;

  // Auto-scroll function
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.scrollTo({
      left: currentIndex * slider.clientWidth,
      behavior: 'smooth'
    });
  }, 4000); // Slide every 3 seconds

  // Pause auto-scroll when manually scrolling
  slider.addEventListener('scroll', () => {
    clearInterval(autoScrollInterval);
  });

  // Restart auto-scroll when scrolling stops for 3 seconds
  let autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.scrollTo({
      left: currentIndex * slider.clientWidth,
      behavior: 'smooth'
    });
  }, 4000);
});