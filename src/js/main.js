import '../sass/style.scss';
import { makeProductCard, makeProductPopup } from './templates';

// “Наименование”, “Цена (баллы)”,“Детали”, “Основная фотография”

const clothes = [
    {
        id:       1,
        category: 'clothes',
        title:    'Футболка "Эволюционируй или сдохни"',
        price:    220,
        isNew:    false,
        img:      '/src/assets/img/products/t-shirt-img.jpg',
        details:  'Брендированная футболка от Qazaq Republic',
    },
    {
        id:       2,
        category: 'clothes',
        title:    'Футболка "Almaty"',
        price:    220,
        isNew:    false,
        img:      '/src/assets/img/products/t-shirt-almaty.jpg',
        details:  'Брендированный свитшот "Almaty"',
    },
    {
        id:       3,
        category: 'clothes',
        title:    'Свитшот "Kolesa Team Premium"',
        price:    400,
        isNew:    true,
        img:      '/src/assets/img/products/hoody-blue-big.png',
        details:  'Брендированный свитшот "Kolesa Team"',
    },
    {
        id:       4,
        category: 'clothes',
        title:    'Футболка "Эволюционируй или умри"',
        price:    220,
        isNew:    true,
        img:      '/src/assets/img/products/t-shirt-img.jpg',
        details:  'Брендированная футболка от Qazaq Republic',
    },

    {
        id:       5,
        category: 'clothes',
        title:    'Свитшот "Kolesa Team"',
        price:    300,
        isNew:    false,
        img:      '/src/assets/img/products/hoody-blue-big.png',
        details:  'Брендированный свитшот "Kolesa Team"',
    },
    {
        id:       6,
        category: 'clothes',
        title:    'Футболка "Almaty"',
        price:    350,
        isNew:    false,
        img:      '/src/assets/img/products/t-shirt-almaty.jpg',
        details:  'Брендированный свитшот "Almaty"',
    },

];

const accessories = [
    {
        id:       7,
        category: 'accessories',
        title:    'Сумка"Kolesa Team"',
        price:    700,
        isNew:    true,
        img:      '/src/assets/img/products/bag-big.jpg',
        details:  'Брендированная сумка от Qazaq Republic"',
    },
    {
        id:       8,
        category: 'accessories',
        title:    'Носки "Kolesa Team Plus"',
        price:    180,
        isNew:    false,
        img:      '/src/assets/img/products/socks-big.jpg',
        details:  'Брендированные носки "Kolesa Team"',
    },
    {
        id:       9,
        category: 'accessories',
        title:    'Бутылка для воды "Kolesa Team"',
        price:    600,
        isNew:    false,
        img:      '/src/assets/img/products/bottle-big.jpg',
        details:  'Бутылка для воды с трубочкой, очень удобная и эргономичная',
    },
    {
        id:       10,
        category: 'accessories',
        title:    'Носки "Kolesa Team"',
        price:    150,
        isNew:    false,
        img:      '/src/assets/img/products/socks-big.jpg',
        details:  'Брендированные носки "Kolesa Team"',
    },
    {
        id:       11,
        category: 'accessories',
        title:    'Бутылка для воды "Kolesa Team"',
        price:    600,
        isNew:    true,
        img:      '/src/assets/img/products/bottle-big.jpg',
        details:  'Бутылка для воды с трубочкой, очень удобная и эргономичная',
    },
    {
        id:       12,
        category: 'accessories',
        title:    'Сумка"Kolesa Team"',
        price:    600,
        isNew:    false,
        img:      '/src/assets/img/products/bag-big.jpg',
        details:  'Брендированная сумка от Qazaq Republic"',
    },
];

const allProducts = [...clothes, ...accessories];
const modal = document.querySelector('.js__modal');

const modalOpen = () => {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
};

const modalClose = () => {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
};

const renderProducts = (products) => {
    const catalog = document.querySelector('.js__catalog');

    products.sort((a, b) => b.isNew - a.isNew);
    catalog.innerHTML = '';
    products.forEach((card) => {
        document.querySelector('.js__catalog').innerHTML += makeProductCard(card);
    });

    document.querySelectorAll('.card')
        .forEach((card) => {
            card.addEventListener('click', () => {
                const dataId = card.dataset.id;

                const currentId = Number(dataId);

                const currentCard = allProducts.find(el => el.id === currentId);

                modal.innerHTML = '';

                modalOpen();

                modal.addEventListener('click', () => {
                    modalClose();
                });

                document.querySelector('.js__modal')
                    .innerHTML += makeProductPopup(currentCard.id,
                        currentCard.title,
                        currentCard.img,
                        currentCard.price,
                        currentCard.details);
            });
        });
};

renderProducts(allProducts);

document.querySelectorAll('.js__filter-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const categoryKey = button.value;

            if (categoryKey === 'clothes') {
                clothes.forEach(() => {
                    renderProducts(clothes);
                });
            } else if (categoryKey === 'accessories') {
                accessories.forEach(() => {
                    renderProducts(accessories);
                });
            } else {
                allProducts.forEach(() => {
                    renderProducts(allProducts);
                });
            }
        });
    });
