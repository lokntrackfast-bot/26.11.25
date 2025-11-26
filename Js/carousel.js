// Simple carousel implementation for featured cats
class SimpleCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = this.container ? Array.from(this.container.children) : [];
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Create navigation
        this.createNavigation();
        
        // Set up auto-play
        this.startAutoPlay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    createNavigation() {
        const prevBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        
        prevBtn.innerHTML = '‹';
        nextBtn.innerHTML = '›';
        
        [prevBtn, nextBtn].forEach(btn => {
            btn.style.cssText = `
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0,0,0,0.5);
                color: white;
                border: none;
                padding: 1rem;
                cursor: pointer;
                font-size: 1.5rem;
                z-index: 10;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        });
        
        prevBtn.style.left = '10px';
        nextBtn.style.right = '10px';
        
        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());
        
        this.container.style.position = 'relative';
        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
        
        this.updateSlides();
    }
    
    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.currentIndex ? 'block' : 'none';
            slide.style.transition = 'opacity 0.5s ease';
        });
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize if carousel container exists
    const carouselContainer = document.querySelector('.cats-grid');
    if (carouselContainer && carouselContainer.children.length > 1) {
        new SimpleCarousel('.cats-grid');
    }
});