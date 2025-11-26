// Данные историй успеха
const successStories = [
    {
        id: 1,
        title: "Барсик и семья Ивановых",
        catName: "Барсик",
        year: 2024,
        type: "adoption",
        date: "15 января 2024",
        duration: "3 месяца в приюте",
        images: [
            "../images/cat1.jpg",
            "../images/cat2.jpg",
            "../images/cat3.jpg"
        ],
        shortDescription: "Барсик провёл в приюте 3 месяца, прежде чем нашёл свою идеальную семью. Теперь у него есть свой собственный диван и много игрушек!",
        fullStory: `
            <p>Барсик попал к нам холодной зимой 2023 года. Он был найден на улице в плачевном состоянии - худой, испуганный и с обмороженными ушками. Наши волонтёры сразу же забрали его в приют, где он прошёл курс лечения и реабилитации.</p>
            
            <p>Первые недели Барсик был очень настороженным, но постепенно начал доверять людям. Особенно он полюбил нашу волонтёру Машу, которая каждый день играла с ним и кормила его любимыми лакомствами.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Барсик стал настоящим членом нашей семьи. Дети его обожают, а он отвечает им взаимностью! Каждый вечер он встречает нас с работы и требует внимания."</div>
                <div class="story-quote-author">— Семья Ивановых</div>
            </div>
            
            <p>Через 3 месяца к нам пришла семья Ивановых с двумя детьми. Они искали активного и дружелюбного котика, и Барсик сразу же покорил их сердца. Сейчас он живёт в просторной квартире, у него есть свой собственный диван у окна и целая корзина игрушек.</p>
            
            <div class="story-timeline">
                <h3>Хронология истории Барсика:</h3>
                <div class="timeline-item">
                    <div class="timeline-date">Декабрь 2023</div>
                    <div class="timeline-content">Барсик найден на улице и доставлен в приют</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Январь 2024</div>
                    <div class="timeline-content">Прошёл курс лечения и реабилитации</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">15 января 2024</div>
                    <div class="timeline-content">Переезд в новую семью Ивановых</div>
                </div>
            </div>
        `,
        highlights: ["Спасён с улицы", "Реабилитация", "Дружелюбный", "Любит детей"],
        family: "Семья Ивановых (двое детей)",
        specialNeeds: false
    },
    {
        id: 2,
        title: "Муся и Анна - история нежности",
        catName: "Муся",
        year: 2024,
        type: "adoption",
        date: "10 февраля 2024",
        duration: "2 месяца в приюте",
        images: [
            "../images/cat2.jpg",
            "../images/cat1.jpg"
        ],
        shortDescription: "Спокойная Муся нашла идеальную хозяйку - Анну, которая работает из дома и может уделять кошечке много внимания.",
        fullStory: `
            <p>Мусю принесли в приют её предыдущие хозяева, которые переезжали в другой город и не могли взять питомца с собой. Первое время кошечка сильно тосковала и пряталась в самом дальнем углу вольера.</p>
            
            <p>Наши волонтёры проявили много терпения, чтобы помочь Мусе адаптироваться. Они разговаривали с ней спокойным голосом, предлагали вкусняшки и никогда не настаивали на общении, если она этого не хотела.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Муся - самое нежное создание! Она встречает меня с работы и всегда готова к обнимашкам. Работая из дома, я ценю её спокойный характер - она просто лежит рядом и мурлыкает, пока я работаю."</div>
                <div class="story-quote-author">— Анна, новая хозяйка Муси</div>
            </div>
            
            <p>Анна пришла в приют в поисках спокойного компаньона. Она работает дизайнером из дома и хотела котика, который будет составлять ей компанию, но не требовать постоянного внимания. Муся оказалась идеальным выбором!</p>
            
            <p>Сейчас Муся живёт в уютной квартире с видом на парк. У неё есть любимое место на подоконнике, где она наблюдает за птицами, и мягкая лежанка рядом с рабочим столом Анны.</p>
        `,
        highlights: ["Спокойная", "Чистоплотная", "Ласковая", "Компаньон"],
        family: "Анна (фрилансер)",
        specialNeeds: false
    },
    {
        id: 3,
        title: "Рыжик и весёлая семья Петровых",
        catName: "Рыжик",
        year: 2024,
        type: "adoption",
        date: "5 марта 2024",
        duration: "1 месяц в приюте",
        images: [
            "../images/cat3.jpg",
            "../images/cat4.jpg"
        ],
        shortDescription: "Энергичный Рыжик нашёл дом с двумя детьми, которые обожают с ним играть. Теперь у него никогда не бывает скучно!",
        fullStory: `
            <p>Рыжик был самым активным котёнком в своём помёте. Он родился в приюте и с самого детства проявлял невероятную энергию и любопытство. Наши волонтёры шутили, что у него вместо батарейки работает атомный реактор.</p>
            
            <p>Несмотря на свой юный возраст, Рыжик успел перевернуть в приюте всё, что только можно. Но его добрый нрав и игривость покоряли всех, кто с ним знакомился.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Рыжик принёс в наш дом столько радости! Дети просто в восторге от своего нового друга. Они вместе играют, бегают и даже 'делают уроки' - Рыжик обязательно садится на учебники!"</div>
                <div class="story-quote-author">— Семья Петровых</div>
            </div>
            
            <p>Семья Петровых с двумя детьми 8 и 10 лет искала активного питомца, который сможет выдержать детские игры. Когда они увидели Рыжика, решение было принято мгновенно.</p>
            
            <p>Теперь у Рыжика есть большая квартира для исследований, двое детей-компаньонов для игр и целый арсенал игрушек. Он стал настоящим талисманом семьи и источником бесконечного веселья.</p>
        `,
        highlights: ["Энергичный", "Игривый", "Дружелюбный", "Любопытный"],
        family: "Семья Петровых (двое детей)",
        specialNeeds: false
    },
    {
        id: 4,
        title: "Сёма - мудрый друг для одинокого пенсионера",
        catName: "Сёма",
        year: 2023,
        type: "adoption",
        date: "20 ноября 2023",
        duration: "6 месяцев в приюте",
        images: [
            "../images/cat4.jpg"
        ],
        shortDescription: "Взрослый котик Сёма нашёл дом у пожилого человека. Теперь они составляют друг другу прекрасную компанию.",
        fullStory: `
            <p>Сёма провёл в приюте целых 6 месяцев. Будучи взрослым котиком, он не привлекал такого внимания, как котята, но его спокойный и мудрый характер заслуживал самого лучшего дома.</p>
            
            <p>Сёма - котик с характером. Он ценит личное пространство, но всегда благодарен за заботу и ласку. Он не требователен, но очень предан.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Сёма - мой лучший друг. Мы понимаем друг друга без слов. Он сидит со мной, когда я читаю, и будит меня утром своим тихим мурлыканьем. Лучшего компаньона и не придумать!"</div>
                <div class="story-quote-author">— Николай Петрович, 72 года</div>
            </div>
            
            <p>Николай Петрович, пенсионер, долго искал спокойного питомца. Когда он познакомился с Сёмой, между ними сразу возникла особая связь. Два мудрых создания нашли друг в друге то, что искали.</p>
        `,
        highlights: ["Спокойный", "Мудрый", "Преданный", "Взрослый"],
        family: "Николай Петрович (пенсионер)",
        specialNeeds: false
    },
    {
        id: 5,
        title: "Луна - второе дыхание в пожилом возрасте",
        catName: "Луна",
        year: 2023,
        type: "rehabilitation",
        date: "15 сентября 2023",
        duration: "4 месяца в приюте",
        images: [
            "../images/cat5.jpg"
        ],
        shortDescription: "Пожилая кошечка Луна с проблемами здоровья нашла заботливую семью, которая обеспечила ей достойную старость.",
        fullStory: `
            <p>Луну привезли в приют в очень плохом состоянии. Ей было уже 9 лет, и предыдущие хозяева не могли обеспечить ей необходимый уход. У Луны были проблемы с почками и суставами.</p>
            
            <p>Наши ветеринары разработали для неё специальную программу лечения и диету. Потребовалось несколько месяцев, чтобы Луна почувствовала себя лучше.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Когда мы увидели Луну, мы поняли - она должна быть с нами. Несмотря на возраст и проблемы со здоровьем, она такая ласковая и благодарная! Мы обеспечим ей самую счастливую старость."</div>
                <div class="story-quote-author">— Семья Сидоровых</div>
            </div>
            
            <p>Семья Сидоровых специально искала пожилого питомца, которому нужен особый уход. Они прошли обучение у наших ветеринаров и теперь обеспечивают Луне все необходимые условия.</p>
        `,
        highlights: ["Пожилая", "Особые потребности", "Ласковая", "Реабилитация"],
        family: "Семья Сидоровых",
        specialNeeds: true
    },
    {
        id: 6,
        title: "Граф - аристократ в новой семье",
        catName: "Граф",
        year: 2023,
        type: "foster",
        date: "8 декабря 2023",
        duration: "2 месяца передержки",
        images: [
            "../images/cat6.jpg"
        ],
        shortDescription: "Независимый Граф нашёл временный дом на передержке, где смог социализироваться перед переходом в постоянную семью.",
        fullStory: `
            <p>Граф попал в приют с улицы, где явно жил самостоятельно долгое время. Он был независимым, осторожным и не доверял людям. Стандартные условия приюта не подходили для его социализации.</p>
            
            <p>Мы решили отдать Графа на передержку в семью, где он мог бы привыкнуть к домашней жизни в спокойной обстановке.</p>
            
            <div class="story-quote">
                <div class="story-quote-content">"Граф сначала был очень настороженным, но постепенно начал доверять нам. Сейчас он встречает меня у двери и даже позволяет себя гладить. Это невероятное чувство - видеть, как животное учится доверять снова."</div>
                <div class="story-quote-author">— Мария, волонтёр на передержке</div>
            </div>
            
            <p>После двух месяцев на передержке Граф стал гораздо более социальным и готовым к переходу в постоянную семью. Сейчас он ждёт своих идеальных хозяев.</p>
        `,
        highlights: ["Независимый", "Передержка", "Социализация", "Умный"],
        family: "Временная передержка",
        specialNeeds: false
    }
];

class SuccessStoriesPage {
    constructor() {
        this.currentPage = 1;
        this.storiesPerPage = 3;
        this.filteredStories = [...successStories];
        this.currentFilter = {
            year: 'all',
            type: 'all'
        };
        this.currentImageIndex = {};
        
        this.init();
    }
    
    init() {
        this.renderStories();
        this.setupEventListeners();
        this.updateStats();
    }
    
    setupEventListeners() {
        // Фильтры
        document.getElementById('filter-year').addEventListener('change', (e) => {
            this.currentFilter.year = e.target.value;
            this.applyFilters();
        });
        
        document.getElementById('filter-type').addEventListener('change', (e) => {
            this.currentFilter.type = e.target.value;
            this.applyFilters();
        });
        
        // Сброс фильтров
        document.getElementById('reset-stories-filters').addEventListener('click', () => this.resetFilters());
        
        // Загрузка ещё историй
        document.getElementById('load-more-stories').addEventListener('click', () => this.loadMoreStories());
        
        // Модальное окно
        document.querySelector('.close-modal').addEventListener('click', () => this.closeModal());
        document.getElementById('story-modal').addEventListener('click', (e) => {
            if (e.target.id === 'story-modal') this.closeModal();
        });
    }
    
    applyFilters() {
        this.filteredStories = successStories.filter(story => {
            // Фильтр по году
            if (this.currentFilter.year !== 'all' && story.year !== parseInt(this.currentFilter.year)) return false;
            
            // Фильтр по типу
            if (this.currentFilter.type !== 'all' && story.type !== this.currentFilter.type) return false;
            
            return true;
        });
        
        this.currentPage = 1;
        this.renderStories();
        this.updateStats();
    }
    
    resetFilters() {
        document.getElementById('filter-year').value = 'all';
        document.getElementById('filter-type').value = 'all';
        this.currentFilter = { year: 'all', type: 'all' };
        this.applyFilters();
    }
    
    renderStories() {
        const container = document.getElementById('stories-container');
        const storiesToShow = this.filteredStories.slice(0, this.currentPage * this.storiesPerPage);
        
        if (storiesToShow.length === 0) {
            container.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <h3>Истории не найдены</h3>
                    <p>Попробуйте изменить параметры фильтрации</p>
                    <button class="btn btn-primary" onclick="storiesPage.resetFilters()">Сбросить фильтры</button>
                </div>
            `;
        } else {
            container.innerHTML = storiesToShow.map(story => this.createStoryCard(story)).join('');
        }
        
        this.updateLoadMoreButton();
    }
    
    createStoryCard(story) {
        const badgeClass = this.getBadgeClass(story.type);
        const badgeText = this.getBadgeText(story.type);
        
        return `
            <div class="story-card" data-story-id="${story.id}">
                <div class="story-badge ${badgeClass}">${badgeText}</div>
                <div class="story-images">
                    <img src="${story.images[0]}" alt="${story.title}" class="story-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPs6Vz4XPgc63zr/PgiDOv8+Fz4PPhM6xzr/PgiA8L3RleHQ+PC9zdmc+'">
                    ${story.images.length > 1 ? `<div class="image-counter">+${story.images.length - 1}</div>` : ''}
                </div>
                <div class="story-content">
                    <div class="story-header">
                        <h3 class="story-title">${story.title}</h3>
                        <div class="story-meta">
                            <span class="story-meta-item">📅 ${story.date}</span>
                            <span class="story-meta-item">⏱️ ${story.duration}</span>
                            <span class="story-meta-item">👨‍👩‍👧‍👦 ${story.family}</span>
                        </div>
                    </div>
                    <p class="story-description">${story.shortDescription}</p>
                    <div class="story-highlights">
                        ${story.highlights.map(highlight => `
                            <span class="story-highlight">${highlight}</span>
                        `).join('')}
                    </div>
                    <div class="story-actions">
                        <button class="btn btn-primary btn-read-story" onclick="storiesPage.openStoryModal(${story.id})">
                            Читать историю
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getBadgeClass(type) {
        const classes = {
            'adoption': '',
            'foster': 'foster',
            'rehabilitation': 'rehabilitation'
        };
        return classes[type] || '';
    }
    
    getBadgeText(type) {
        const texts = {
            'adoption': 'Обрёл дом!',
            'foster': 'Передержка',
            'rehabilitation': 'Реабилитация'
        };
        return texts[type] || 'История';
    }
    
    openStoryModal(storyId) {
        const story = successStories.find(s => s.id === storyId);
        if (!story) return;
        
        this.currentImageIndex[storyId] = 0;
        const modalContent = document.getElementById('modal-content');
        
        modalContent.innerHTML = `
            <div class="modal-story">
                <div class="modal-story-images">
                    <img src="${story.images[0]}" alt="${story.title}" class="modal-story-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPs6Vz4XPgc63zr/PgiDOv8+Fz4PPhM6xzr/PgiA8L3RleHQ+PC9zdmc+''>
                    ${story.images.length > 1 ? `
                        <div class="modal-story-nav">
                            <button class="modal-nav-btn" onclick="storiesPage.prevImage(${storyId})">‹</button>
                            <button class="modal-nav-btn" onclick="storiesPage.nextImage(${storyId})">›</button>
                        </div>
                    ` : ''}
                </div>
                <div class="modal-story-content">
                    <div class="modal-story-header">
                        <h2 class="modal-story-title">${story.title}</h2>
                        <div class="modal-story-meta">
                            <span>📅 ${story.date}</span>
                            <span>⏱️ ${story.duration}</span>
                            <span>👨‍👩‍👧‍👦 ${story.family}</span>
                            <span>🏷️ ${this.getBadgeText(story.type)}</span>
                        </div>
                    </div>
                    <div class="modal-story-full">
                        ${story.fullStory}
                    </div>
                    <div class="story-highlights">
                        ${story.highlights.map(highlight => `
                            <span class="story-highlight">${highlight}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('story-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    prevImage(storyId) {
        const story = successStories.find(s => s.id === storyId);
        if (!story || story.images.length <= 1) return;
        
        this.currentImageIndex[storyId] = (this.currentImageIndex[storyId] - 1 + story.images.length) % story.images.length;
        this.updateModalImage(storyId);
    }
    
    nextImage(storyId) {
        const story = successStories.find(s => s.id === storyId);
        if (!story || story.images.length <= 1) return;
        
        this.currentImageIndex[storyId] = (this.currentImageIndex[storyId] + 1) % story.images.length;
        this.updateModalImage(storyId);
    }
    
    updateModalImage(storyId) {
        const story = successStories.find(s => s.id === storyId);
        const imageElement = document.querySelector('.modal-story-image');
        if (imageElement && story) {
            imageElement.src = story.images[this.currentImageIndex[storyId]];
        }
    }
    
    closeModal() {
        document.getElementById('story-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    loadMoreStories() {
        this.currentPage++;
        this.renderStories();
    }
    
    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('load-more-stories');
        const hasMoreStories = this.filteredStories.length > this.currentPage * this.storiesPerPage;
        loadMoreBtn.style.display = hasMoreStories ? 'block' : 'none';
    }
    
    updateStats() {
        const totalStories = this.filteredStories.length;
        const thisYearStories = this.filteredStories.filter(story => story.year === 2024).length;
        const specialNeedsStories = this.filteredStories.filter(story => story.specialNeeds).length;
        
        this.animateCounter('total-stories', totalStories);
        this.animateCounter('this-year-stories', thisYearStories);
        this.animateCounter('special-needs-stories', specialNeedsStories);
    }
    
    animateCounter(elementId, target) {
        const element = document.getElementById(elementId);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }
}

// Инициализация при загрузке страницы
let storiesPage;
document.addEventListener('DOMContentLoaded', () => {
    storiesPage = new SuccessStoriesPage();
    
    // Закрытие модального окна по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            storiesPage.closeModal();
        }
    });
});