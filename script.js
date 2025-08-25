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

    const dropdownButton = document.querySelector(".header__search__category button");
    const dropdownContainer = document.querySelector(".dropdown");
    const listCategory = document.querySelector(".list__category");
    
    if (dropdownButton && dropdownContainer) {
        const menuSVG = dropdownButton.querySelector('svg:first-child');
        const closeSVG = dropdownButton.querySelector('svg:last-child');
        
        if (closeSVG) {
            closeSVG.style.display = "none";
        }
        
        let isDropdownOpen = false;
        
        dropdownButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (isDropdownOpen) {
                dropdownContainer.style.display = "none";
                if (menuSVG) menuSVG.style.display = "block";
                if (closeSVG) closeSVG.style.display = "none";
                isDropdownOpen = false;
            } else {
                dropdownContainer.style.display = "flex";
                if (menuSVG) menuSVG.style.display = "none";
                if (closeSVG) closeSVG.style.display = "block";
                isDropdownOpen = true;
            }
        });
        
        document.addEventListener("click", (e) => {
            if (isDropdownOpen && 
                !dropdownContainer.contains(e.target) && 
                !dropdownButton.contains(e.target)) {
                closeDropdown();
            }
        });
    }

    if (listCategory) {
    listCategory.addEventListener("click", (e) => {
        e.preventDefault();
        
        const clickedItem = e.target.closest("li");
        if (!clickedItem) return;
        
        const allCategories = listCategory.querySelectorAll("li");
        allCategories.forEach(item => {
            item.classList.remove("category__active");
            item.classList.add("category__default");
        });
        
        clickedItem.classList.remove("category__default");
        clickedItem.classList.add("category__active");
    });
    }
});