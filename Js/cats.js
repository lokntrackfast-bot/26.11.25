// Данные котиков
const catsData = [
    {
        id: 1,
        name: "Барсик",
        age: 2,
        gender: "male",
        ageCategory: "young",
        character: "playful",
        compatibility: ["children", "cats"],
        traits: ["Дружелюбный", "Игривый", "Ласковый"],
        description: "Очень общительный и весёлый котик. Обожает играть с мячиком и никогда не откажется от ласки.",
        image: "../images/cat1.jpg",
        inShelterSince: "2024-01-15",
        specialNeeds: false
    },
    {
        id: 2,
        name: "Муся",
        age: 1.5,
        gender: "female",
        ageCategory: "young",
        character: "calm",
        compatibility: ["children", "cats", "dogs"],
        traits: ["Спокойная", "Нежная", "Чистоплотная"],
        description: "Спокойная и воспитанная кошечка. Любит тишину и уютные уголки. Идеальна для семьи.",
        image: "../images/cat2.jpg",
        inShelterSince: "2024-02-01",
        specialNeeds: false
    },
    {
        id: 3,
        name: "Рыжик",
        age: 0.8,
        gender: "male",
        ageCategory: "kitten",
        character: "playful",
        compatibility: ["children", "cats"],
        traits: ["Энергичный", "Любопытный", "Дружелюбный"],
        description: "Малыш полный энергии и сюрпризов! Очень быстро учится и обожает новые игрушки.",
        image: "../images/cat3.jpg",
        inShelterSince: "2024-03-10",
        specialNeeds: false
    },
    {
        id: 4,
        name: "Сёма",
        age: 4,
        gender: "male",
        ageCategory: "adult",
        character: "calm",
        compatibility: ["cats"],
        traits: ["Спокойный", "Мудрый", "Независимый"],
        description: "Взрослый и мудрый котик. Ценит личное пространство, но всегда благодарен за заботу.",
        image: "../images/cat4.jpg",
        inShelterSince: "2023-11-20",
        specialNeeds: false
    },
    {
        id: 5,
        name: "Луна",
        age: 9,
        gender: "female",
        ageCategory: "senior",
        character: "affectionate",
        compatibility: ["children"],
        traits: ["Ласковая", "Терпеливая", "Спокойная"],
        description: "Пожилая, но очень молодая душой кошечка. Ищет тихий дом для спокойной жизни.",
        image: "../images/cat5.jpg",
        inShelterSince: "2023-09-05",
        specialNeeds: true
    },
    {
        id: 6,
        name: "Граф",
        age: 3,
        gender: "male",
        ageCategory: "adult",
        character: "independent",
        compatibility: [],
        traits: ["Независимый", "Умный", "Наблюдательный"],
        description: "Настоящий аристократ! Любит наблюдать за происходящим с высоты и в своём темпе.",
        image: "../images/cat6.jpg",
        inShelterSince: "2024-01-08",
        specialNeeds: false
    }
];

class CatsPage {
    constructor() {
        this.currentPage = 1;
        this.catsPerPage = 6;
        this.filteredCats = [...catsData];
        this.sortBy = 'newest';
        
        this.init();
    }
    
    init() {
        this.renderCats();
        this.setupEventListeners();
        this.applyFilters();
    }
    
    setupEventListeners() {
        // Фильтры
        document.getElementById('filter-gender').addEventListener('change', () => this.applyFilters());
        document.getElementById('filter-age').addEventListener('change', () => this.applyFilters());
        document.getElementById('filter-character').addEventListener('change', () => this.applyFilters());
        document.getElementById('filter-compatibility').addEventListener('change', () => this.applyFilters());
        
        // Сортировка
        document.getElementById('sort-cats').addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.applyFilters();
        });
        
        // Сброс фильтров
        document.getElementById('reset-filters').addEventListener('click', () => this.resetFilters());
        
        // Пагинация
        document.getElementById('prev-page').addEventListener('click', () => this.previousPage());
        document.getElementById('next-page').addEventListener('click', () => this.nextPage());
    }
    
    applyFilters() {
        const genderFilter = document.getElementById('filter-gender').value;
        const ageFilter = document.getElementById('filter-age').value;
        const characterFilter = document.getElementById('filter-character').value;
        const compatibilityFilter = document.getElementById('filter-compatibility').value;
        
        this.filteredCats = catsData.filter(cat => {
            // Фильтр по полу
            if (genderFilter !== 'all' && cat.gender !== genderFilter) return false;
            
            // Фильтр по возрасту
            if (ageFilter !== 'all' && cat.ageCategory !== ageFilter) return false;
            
            // Фильтр по характеру
            if (characterFilter !== 'all' && cat.character !== characterFilter) return false;
            
            // Фильтр по совместимости
            if (compatibilityFilter !== 'all' && !cat.compatibility.includes(compatibilityFilter)) return false;
            
            return true;
        });
        
        this.sortCats();
        this.currentPage = 1;
        this.renderCats();
    }
    
    sortCats() {
        switch(this.sortBy) {
            case 'newest':
                this.filteredCats.sort((a, b) => new Date(b.inShelterSince) - new Date(a.inShelterSince));
                break;
            case 'oldest':
                this.filteredCats.sort((a, b) => new Date(a.inShelterSince) - new Date(b.inShelterSince));
                break;
            case 'young':
                this.filteredCats.sort((a, b) => a.age - b.age);
                break;
            case 'name':
                this.filteredCats.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }
    
    resetFilters() {
        document.getElementById('filter-gender').value = 'all';
        document.getElementById('filter-age').value = 'all';
        document.getElementById('filter-character').value = 'all';
        document.getElementById('filter-compatibility').value = 'all';
        document.getElementById('sort-cats').value = 'newest';
        
        this.sortBy = 'newest';
        this.applyFilters();
    }
    
    renderCats() {
        const container = document.getElementById('cats-container');
        const startIndex = (this.currentPage - 1) * this.catsPerPage;
        const endIndex = startIndex + this.catsPerPage;
        const catsToShow = this.filteredCats.slice(startIndex, endIndex);
        
        if (catsToShow.length === 0) {
            container.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <h3>Котики не найдены</h3>
                    <p>Попробуйте изменить параметры фильтрации</p>
                    <button class="btn btn-primary" onclick="catsPage.resetFilters()">Сбросить фильтры</button>
                </div>
            `;
        } else {
            container.innerHTML = catsToShow.map(cat => this.createCatCard(cat)).join('');
        }
        
        this.updatePagination();
    }
    
    createCatCard(cat) {
        const genderIcon = cat.gender === 'male' ? '♂' : '♀';
        const genderColor = cat.gender === 'male' ? '#8FC1A9' : '#C89B7B';
        
        return `
            <div class="cat-card" data-cat-id="${cat.id}">
                ${cat.specialNeeds ? '<div class="cat-badge">Особенные потребности</div>' : ''}
                <div class="cat-image">
                    <img src="${cat.image}" alt="${cat.name}" onerror="this.src='../images/cat-placeholder.jpg'">
                </div>
                <div class="cat-info">
                    <h3>${cat.name} <span style="color: ${genderColor}">${genderIcon}</span></h3>
                    <div class="cat-meta">
                        <span>${cat.age} ${this.getAgeText(cat.age)}</span>
                        <span>В приюте: ${this.getTimeInShelter(cat.inShelterSince)}</span>
                    </div>
                    <p class="cat-description">${cat.description}</p>
                    <div class="cat-traits">
                        ${cat.traits.map(trait => `<span class="trait">${trait}</span>`).join('')}
                    </div>
                    <div class="cat-actions">
                        <a href="cat-details.html?id=${cat.id}" class="btn btn-primary btn-small">Подробнее</a>
                        <button class="btn btn-outline btn-small" onclick="catsPage.openAdoptForm(${cat.id})">Забрать</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getAgeText(age) {
        if (age < 1) return 'год';
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;
        
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'лет';
        if (lastDigit === 1) return 'год';
        if (lastDigit >= 2 && lastDigit <= 4) return 'года';
        return 'лет';
    }
    
    getTimeInShelter(dateString) {
        const months = Math.floor((new Date() - new Date(dateString)) / (30 * 24 * 60 * 60 * 1000));
        if (months === 0) return 'менее месяца';
        if (months === 1) return '1 месяц';
        if (months < 5) return `${months} месяца`;
        return `${months} месяцев`;
    }
    
    updatePagination() {
        const totalPages = Math.ceil(this.filteredCats.length / this.catsPerPage);
        const currentPageElement = document.getElementById('current-page');
        const prevButton = document.getElementById('prev-page');
        const nextButton = document.getElementById('next-page');
        
        currentPageElement.textContent = this.currentPage;
        
        prevButton.disabled = this.currentPage === 1;
        nextButton.disabled = this.currentPage === totalPages || totalPages === 0;
    }
    
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderCats();
        }
    }
    
    nextPage() {
        const totalPages = Math.ceil(this.filteredCats.length / this.catsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderCats();
        }
    }
    
    openAdoptForm(catId) {
        const cat = catsData.find(c => c.id === catId);
        if (cat) {
            alert(`Заявка на усыновление ${cat.name}! В реальном приложении здесь открылась бы форма.`);
            // В реальном приложении: window.location.href = `adopt-form.html?catId=${catId}`;
        }
    }
}

// Инициализация при загрузке страницы
let catsPage;
document.addEventListener('DOMContentLoaded', () => {
    catsPage = new CatsPage();
});