document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // Header Parallax Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Product Data
    const products = [
        {
            name: 'Artistic Candle 1',
            price: 29.99,
            imageUrl: 'https://images.unsplash.com/photo-1612293905607-b003de9e54fb?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A beautifully crafted artistic candle with a unique design.',
        },
        {
            name: 'Fragrance Candle',
            price: 24.99,
            imageUrl: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A fragrant candle that will fill your room with a pleasant aroma.',
        },
        {
            name: 'Special Edition Candle',
            price: 39.99,
            imageUrl: 'https://images.unsplash.com/photo-1643122966676-29e8597257f7?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A limited edition candle with a special design and fragrance.',
        },
        {
            name: 'Artsy Stuff 1',
            price: 19.99,
            imageUrl: 'https://images.unsplash.com/photo-1619695662967-3e739a597f47?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'Some other artsy stuff that you might like.',
        },
        {
            name: 'Artistic Candle 2',
            price: 32.99,
            imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A beautifully crafted artistic candle with a unique design.',
        },
        {
            name: 'Fragrance Candle 2',
            price: 27.99,
            imageUrl: 'https://images.unsplash.com/photo-1608977230965-6a1b92233ac6?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A fragrant candle that will fill your room with a pleasant aroma.',
        },
        {
            name: 'Special Edition Candle 2',
            price: 42.99,
            imageUrl: 'https://images.unsplash.com/photo-1646143612220-45f02eade445?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'A limited edition candle with a special design and fragrance.',
        },
        {
            name: 'Artsy Stuff 2',
            price: 22.99,
            imageUrl: 'https://images.unsplash.com/photo-1570823635306-250abb06d4b3?fm=jpg&q=60&w=400&ixlib=rb-4.1.0',
            description: 'Some other artsy stuff that you might like.',
        },
    ];

    // Product Rendering Logic
    const productGrid = document.getElementById('product-grid');

    function renderProducts() {
        products.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.opacity = 0; // Start with card invisible
            card.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="card-footer">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);

            // Staggered fade-in animation
            setTimeout(() => {
                card.style.opacity = 1;
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }

    renderProducts();
});
