import {produtos} from './mock.js'

document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        
});
const ul = document.querySelector(".list_products");

const renderProducts = (products, list) => {
    console.log(products);
    products.forEach(element => {
        const li = document.createElement("li");
        li.classList.add("card_product")
        li.innerHTML = `
            <img src="${element.img}" alt="${element.title}" />
            <div>
            <p>${element.title}</p>
            <span>${element.previous_price}</span>
            <h4>${element.price}</h4>
            <h5>${element.installment_price}</h5>
            </div>
            <button id=${element.id}>Adicionar ao carrinho</button>
        `;
        list.append(li);
    });

    return list;
}

renderProducts(produtos, ul);

document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector('.list_products');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    const scrollAmount = 275; // Quantidade de pixels a serem rolados por clique

    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    
    scrollContainer.addEventListener('scroll', () => {
        scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
        scrollRightButton.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
    });

 
    scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
    scrollRightButton.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
});

