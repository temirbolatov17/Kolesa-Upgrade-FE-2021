import '../sass/style.scss';

// “Наименование”, “Цена (баллы)”,“Детали”, “Основная фотография”

const clothes = [
    {
        id:      0,
        title:   'Футболка "Эволюционируй или сдохни"',
        price:   220,
        isNew:   false,
        img:     '/src/assets/img/products/t-shirt-img.jpg',
        details: 'Брендированная футболка от Qazaq Republic',
    },
    {
        id:      1,
        title:   'Футболка "Almaty"',
        price:   220,
        isNew:   false,
        img:     '/src/assets/img/products/t-shirt-almaty.jpg',
        details: 'Брендированный свитшот "Almaty"',
    },
    {
        id:      2,
        title:   'Свитшот "Kolesa Team Premium"',
        price:   400,
        isNew:   true,
        img:     '/src/assets/img/products/hoody-blue-big.png',
        details: 'Брендированный свитшот "Kolesa Team"',
    },
    {
        id:      3,
        title:   'Футболка "Эволюционируй или умри"',
        price:   220,
        isNew:   true,
        img:     '/src/assets/img/products/t-shirt-img.jpg',
        details: 'Брендированная футболка от Qazaq Republic',
    },

    {
        id:      4,
        title:   'Свитшот "Kolesa Team"',
        price:   300,
        isNew:   false,
        img:     '/src/assets/img/products/hoody-blue-big.png',
        details: 'Брендированный свитшот "Kolesa Team"',
    },
    {
        id:      5,
        title:   'Футболка "Almaty"',
        price:   350,
        isNew:   false,
        img:     '/src/assets/img/products/t-shirt-almaty.jpg',
        details: 'Брендированный свитшот "Almaty"',
    },

];

const accessories = [
    {
        id:      6,
        title:   'Сумка"Kolesa Team"',
        price:   700,
        isNew:   true,
        img:     '/src/assets/img/products/bag-big.jpg',
        details: 'Брендированная сумка от Qazaq Republic"',
    },
    {
        id:      7,
        title:   'Носки "Kolesa Team Plus"',
        price:   180,
        isNew:   false,
        img:     '/src/assets/img/products/socks-big.jpg',
        details: 'Брендированные носки "Kolesa Team"',
    },
    {
        id:      8,
        title:   'Бутылка для воды "Kolesa Team"',
        price:   600,
        isNew:   false,
        img:     '/src/assets/img/products/bottle-big.jpg',
        details: 'Бутылка для воды с трубочкой, очень удобная и эргономичная',
    },
    {
        id:      9,
        title:   'Носки "Kolesa Team"',
        price:   150,
        isNew:   false,
        img:     '/src/assets/img/products/socks-big.jpg',
        details: 'Брендированные носки "Kolesa Team"',
    },
    {
        id:      10,
        title:   'Бутылка для воды "Kolesa Team"',
        price:   600,
        isNew:   true,
        img:     '/src/assets/img/products/bottle-big.jpg',
        details: 'Бутылка для воды с трубочкой, очень удобная и эргономичная',
    },
    {
        id:      11,
        title:   'Сумка"Kolesa Team"',
        price:   600,
        isNew:   false,
        img:     '/src/assets/img/products/bag-big.jpg',
        details: 'Брендированная сумка от Qazaq Republic"',
    },
];

const makeProductCard = (title, img, price, isNew, id) => `<li class="product-list__item card" data-id="${id}">
<div class="card__image">
    <img src="${img}" width="300" height="300" alt="">
    ${isNew ? '<span class="card__badge">new</span>' : ''}

</div>
<div class="card__description description">
    <span class="description__price">
        ${price} баллов
    </span>
    <h3 class="description__title">
        ${title}
    </h3>
    <p class="description__hint">
        Размеры S/M/L
    </p>
</div>
<button class="button button--card-order" type="button">
    Заказать
</button>
</li>`;

// const makeProductPopup = (id, title, img, price, details) => `
// <div class="modal__order">
// <div class="product-images">
//     <div class="product-images__main">
//         <img src="${img}" alt="Толстовка синего цвета" width="330" height="330">
//     </div>
//     <ul class="product-images__list">
//         <li class="product-images__item">
//         <img src="/src/assets/img/products/hoody-beige-icon.png" alt="Толстовка бежевого цвета" width="50" height="50">
//         </li>
//         <li class="product-images__item product-images__item--active">
//             <img src="/src/assets/img/products/hoody-blue-icon.png" alt="Толстовка синего цвета" width="50" height="50">
//         </li>
//         <li class="product-images__item">
//             <img src="/src/assets/img/products/hoody-gray-icon.png" alt="Толстовка серого цвета" width="50" height="50">
//         </li>
//     </ul>
// </div>
// <div class="choice-area">
//     <div class="choice-area__info info">
//         <h2 class="info__title">${title}</h2>
//         <p class="info__points">${price}</p>
//         <button class="button button--modal-order" type="submit" form="order-options">Заказать</button>
//         <div class="info__balance balance">
//             <p class="balance__title">Твой баланс:</p>
//             <span class="balance__total">3 945 баллов</span>
//         </div>
//     </div>
//     <form class="choice-area__form form" action="#" method="POST" id="order-options">
//         <fieldset class="form-fieldset form-fieldset--color">
//             <legend class="form-fieldset__title">Цвета:</legend>
//             <ul class="options options--color">
//                 <li class="options__item options__item--blue options__item--checked">
//                     <input class="radio-color" type="radio" id="color-blue" name="color" value="blue" checked>
//                     <label for="color-blue">Синий</label>
//                 </li>
//                 <li class="options__item options__item--beige">
//                     <input class="radio-color" type="radio" id="color-beige" name="color" value="beige">
//                     <label for="color-beige">Бежевый</label>
//                 </li>
//                 <li class="options__item options__item--gray">
//                     <input class="radio-color" type="radio" id="color-gray" name="color" value="gray">
//                     <label for="color-gray">Серый</label>
//                 </li>
//             </ul>
//         </fieldset>
//         <fieldset class="form-fieldset form-fieldset--size">
//             <legend class="form-fieldset__title">Размер:</legend>
//             <ul class="options options--size">
//                 <li class="options__item options__item--checked options__item--size">
//                     <input class="radio-size" type="radio" id="size-s" name="size" value="S" checked>
//                     <label for="size-s">S</label>
//                 </li>
//                 <li class="options__item options__item--size">
//                     <input class="radio-size" type="radio" id="size-m" name="size" value="M">
//                     <label for="size-m">M</label>
//                 </li>
//                 <li class="options__item options__item--size">
//                     <input class="radio-size" type="radio" id="size-l" name="size" value="L">
//                     <label for="size-l">L</label>
//                 </li>
//             </ul>
//         </fieldset>
//     </form>
//     <dl class="choice-area__details details">
//         <dt class="details__title">Детали:</dt>
//         <dd class="details__subtitle">${details}</dd>
//     </dl>
//     <dl class="choice-area__details details">
//         <dt class="details__title">Как выбрать размер:</dt>
//         <dd class="details__subtitle">Написать дяде Рику для уточнения.</dd>
//     </dl>
// </div>
// <button class="modal__close" type="button" aria-label="Закрыть"></button>
// </div>
// `;

const allProducts = accessories.concat(clothes);

allProducts.forEach((card) => {
    const {
        title, img, price, isNew, id,
    } = card;
    const cardHtml = makeProductCard(title, img, price, isNew, id);

    for (let i = 0; i < clothes.length; i += 1) {
        allProducts.sort((a, b) => a.isNew - b.isNew);
        allProducts.reverse();
    }

    document.querySelector('.js__catalog').innerHTML += cardHtml;
});

document.querySelectorAll('.js__filter-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const categoryKey = button.value;

            for (let i = 0; i < clothes.length; i += 1) {
                clothes.sort((a, b) => a.isNew - b.isNew);
                clothes.reverse();
            }

            for (let i = 0; i < accessories.length; i += 1) {
                accessories.sort((a, b) => a.isNew - b.isNew);
                accessories.reverse();
            }

            document.querySelector('.js__catalog').innerHTML = '';

            if (categoryKey === 'clothes') {
                clothes.forEach((card) => {
                    const {
                        title, img, price, isNew, id,
                    } = card;
                    const cardHtml = makeProductCard(title, img, price, isNew, id);

                    document.querySelector('.js__catalog').innerHTML += cardHtml;
                });
            } else if (categoryKey === 'accessories') {
                accessories.forEach((card) => {
                    const {
                        title, img, price, isNew, id,
                    } = card;
                    const cardHtml = makeProductCard(title, img, price, isNew, id);

                    document.querySelector('.js__catalog').innerHTML += cardHtml;
                });
            } else {
                allProducts.forEach((card) => {
                    const {
                        title, img, price, isNew, id,
                    } = card;
                    const cardHtml = makeProductCard(title, img, price, isNew, id);

                    document.querySelector('.js__catalog').innerHTML += cardHtml;
                });
            }
        });
    });

const modal = document.querySelector('.modal');

const modalOpen = function () {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
};

const modalClose = function () {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
};

const closeModal = document.querySelector('.js__close');

closeModal.addEventListener('click', () => {
    modalClose();
});

document.querySelectorAll('.card')
    .forEach((card) => {
        card.addEventListener('click', () => {
            // const cardId = card.dataset;

            // const data = allProducts[e.currentTarget.dataset.id];

            // console.log(cardId);
            // console.log(data);

            modalOpen();
        });
    });
