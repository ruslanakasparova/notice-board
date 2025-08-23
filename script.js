document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".main__table");
    for(let i = 0; i < 16; i++){
        const newCard = document.createElement('div');
        newCard.className = 'card';
        const imgCard = document.createElement('div');
        imgCard.className = 'card__img';
        imgCard.innerHTML = `<img src="./img/img${i % 3}.jpg" alt="Изображение товара">`;
        const descriptionCard = document.createElement('div');
        descriptionCard.className = 'card__description';
        descriptionCard.innerHTML = '<h3 class="card__title">Гитара Fender</h3><h3 class="card__price">20 000 ₽</h3><p class="card__address">Москва, Ленинский проспект</p><p class="card__date">Сегодня 14:00</p>';
        newCard.appendChild(imgCard);
        newCard.appendChild(descriptionCard);
        table.appendChild(newCard);
    }
});