// Help page functionality
class HelpPage {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Donation amount buttons
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                document.getElementById('custom-amount').value = e.target.dataset.amount;
            });
        });
        
        // Custom amount input
        document.getElementById('custom-amount').addEventListener('input', (e) => {
            if (e.target.value) {
                document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            }
        });
        
        // Donation form submission
        document.querySelector('.donation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processDonation();
        });
    }
    
    processDonation() {
        const amount = document.getElementById('custom-amount').value;
        const name = document.getElementById('donor-name').value;
        
        if (!amount || !name) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        // Show loading state
        const submitBtn = document.querySelector('.donation-form button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Обработка...';
        submitBtn.disabled = true;
        
        // Simulate payment processing
        setTimeout(() => {
            alert(`Спасибо, ${name}! Ваше пожертвование в размере ${amount}₽ успешно обработано.`);
            closePaymentModal();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
}

// Modal functions
function showPaymentModal() {
    document.getElementById('payment-modal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
    document.querySelector('.donation-form').reset();
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
}

function showVolunteerForm() {
    alert('Форма волонтёрства! В реальном приложении здесь открылась бы форма для регистрации волонтёров.');
}

// Supply item toggle
function toggleSupply(item) {
    const button = document.querySelector(`[data-item="${item}"] .supply-btn`);
    if (button.textContent === 'Готов принести') {
        button.textContent = 'Отменить';
        button.style.background = 'var(--accent-brown)';
        button.style.color = 'white';
        button.style.borderColor = 'var(--accent-brown)';
    } else {
        button.textContent = 'Готов принести';
        button.style.background = 'transparent';
        button.style.color = 'var(--accent-mint)';
        button.style.borderColor = 'var(--accent-mint)';
    }
}

// Social share functions
function shareOnVK() {
    alert('Поделиться в VK');
    // window.open('https://vk.com/share.php?url=' + encodeURIComponent(window.location.href), '_blank');
}

function shareOnTelegram() {
    alert('Поделиться в Telegram');
    // window.open('https://t.me/share/url?url=' + encodeURIComponent(window.location.href), '_blank');
}

function shareOnInstagram() {
    alert('Поделиться в Instagram');
    // Instagram doesn't have direct share, would need different approach
}

// Initialize help page
let helpPage;
document.addEventListener('DOMContentLoaded', () => {
    helpPage = new HelpPage();
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('payment-modal');
        if (e.target === modal) {
            closePaymentModal();
        }
    });
});