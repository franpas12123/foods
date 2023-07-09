"use strict";
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const loadMore = document.querySelector('#load-more-btn');
const mostPopular = document.querySelector('#most-popular');
const elements = [burger, loadMore];
const targets = [menu, mostPopular];
elements.forEach((element, index) => {
    element === null || element === void 0 ? void 0 : element.addEventListener('click', () => {
        var _a;
        if ((_a = targets[index]) === null || _a === void 0 ? void 0 : _a.classList.contains('hidden')) {
            targets[index].classList.remove('hidden');
        }
        else
            targets[index].classList.add('hidden');
    });
});
