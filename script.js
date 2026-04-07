function openLetter() {
    // Hide intro
    const introScreen = document.getElementById('intro-screen');
    introScreen.style.opacity = '0';
    introScreen.style.pointerEvents = 'none';
    
    setTimeout(() => {
        introScreen.classList.add('hidden');
        
        // Change Background
        document.body.classList.add('opened');
        
        // Show main screen
        const mainScreen = document.getElementById('main-screen');
        mainScreen.classList.remove('hidden');
        
        // Trigger fade ins
        setTimeout(() => {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => el.classList.add('visible'));
        }, 100);

        // Start creating floating hearts in the background
        startHeartParticles();
    }, 1500);
}

function startHeartParticles() {
    setInterval(createHeart, 300);
}

function createHeart() {
    const container = document.getElementById('particles-container');
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    
    // Randomize position, size, and duration
    const size = Math.random() * 20 + 10;
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 3 + 4; // 4 to 7 seconds

    heart.style.left = `${startLeft}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    
    // Add variations in colors
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function forgiveMe() {
    const btn = document.querySelector('.forgive-btn');
    btn.innerHTML = 'Thank you for everything ❤️';
    btn.style.background = 'linear-gradient(45deg, #10b981, #34d399)';
    btn.style.boxShadow = '0 10px 20px rgba(16, 185, 129, 0.3)';
    
    // burst of hearts!
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 50);
    }
}