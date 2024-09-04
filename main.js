document.addEventListener('DOMContentLoaded', () => {
    const catalogContainer = document.querySelector('.catalog-container');
    const products = [
        { name: 'Сумка 00070', image: 'images/00070.jpg', price: '569 грн' },
        { name: 'Сумка 00094', image: 'images/00094.jpg', price: '749 грн' },
        { name: 'Сумка 00100', image: 'images/00100.jpg', price: '490 грн' },
        { name: 'Сумка 00117', image: 'images/00117.jpg', price: '390 грн' },
        { name: 'Сумка 00147', image: 'images/00147.jpg', price: '490 грн' },
        { name: 'Сумка 00149', image: 'images/00149.jpg', price: '649 грн' },
        { name: 'Сумка 00157', image: 'images/00157.jpg', price: '465 грн' },
        { name: 'Сумка 00171', image: 'images/00171.jpg', price: '449 грн' },
        { name: 'Сумка 00204', image: 'images/00204.jpg', price: '679 грн' },
        { name: 'Сумка 00261', image: 'images/00261.jpg', price: '529 грн' },
        { name: 'Сумка 00564', image: 'images/00564.jpg', price: '509 грн' },
        { name: 'Сумка 01565', image: 'images/01565.jpg', price: '499 грн' },
        { name: 'Сумка 01632', image: 'images/01632.jpg', price: '649 грн' }
    ];

    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'catalog-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        catalogContainer.appendChild(item);
    });
});
