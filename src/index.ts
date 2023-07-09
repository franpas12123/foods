const burger = document.querySelector('#burger')!;
const menu = document.querySelector('#menu')!;
const loadMore = document.querySelector('#load-more-btn')!;
const mostPopular = document.querySelector('#most-popular')!;

const elements = [burger, loadMore]
const targets = [menu, mostPopular]


elements.forEach((element, index) => {
  element?.addEventListener('click', () => {
    if (targets[index]?.classList.contains('hidden')) {
      targets[index].classList.remove('hidden')
    }
    else targets[index].classList.add('hidden')
  })
})