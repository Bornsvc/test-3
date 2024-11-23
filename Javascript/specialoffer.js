

let currentIndex = 0;
        const cards = document.querySelectorAll('.slider-container .card');
        const totalCards = cards.length;
        const cardsToShow = 4;
        
        function slideRight() {
            if(currentIndex < totalCards - 4){
                currentIndex++;
                updateSlider();
            }else {
                currentIndex = 0;
            }
            
        }
        
        function slideLeft() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }else {
                currentIndex = totalCards - 3
            }
        }


        function updateSlider() {
            const cardWidth = cards[0].clientWidth;
            document.querySelector('.slider-container').style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px`;
        }