const products = document.querySelectorAll('.product')

if (products) {
  products.forEach(el => {
    let currentProduct = el;
    const imageSwitcItems = el.querySelectorAll('.image-switch__item');
    const imagePagination = el.querySelector('.image-pagination');
    imageSwitcItems.forEach((el, index) => {
        el.setAttribute('data-index', index)
        imagePagination.innerHTML += `<li class='image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}' data-index='${index}'></li>`
        el.addEventListener('mouseenter', (event) => {
          currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
          currentProduct.querySelector(`.image-pagination__item[data-index='${event.currentTarget.dataset.index}']`).classList.add('image-pagination__item--active')
        })
    })
  })
}
