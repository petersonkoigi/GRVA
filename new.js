// Get elements
const bookBtn = document.getElementById('bookBtn');
const modal = document.getElementById('bookingForm');
const closeBtn = document.getElementById('closeBtn');
const bookingForm = document.getElementById('bookingFormContent');
const thankYouMessage = document.getElementById('thankYouMessage');

// Open the modal when "Book With Us" button is clicked
bookBtn.addEventListener('click', function(event) {
    event.preventDefault();  // Prevents default anchor behavior
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on submit

    // Hide the form and show the thank you message
    bookingForm.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Optionally: You can capture the form data here and send it to a server or log it for testing
    const formData = new FormData(bookingForm);
    console.log("Form Data Submitted:");
    formData.forEach((value, key) => {
        console.log(key + ": " + value);
    });

    // Optional: Reset form after submission
    bookingForm.reset();
});

        const slider = document.getElementById('programSlider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dotsContainer = document.getElementById('sliderDots');

        let currentSlide = 0;
        const totalSlides = slides.length;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto-advance slides every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);

        // Pause auto-advance on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Optional: Add touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
            }
        });

 