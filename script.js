let tasbList = document.querySelector('.tabs-list'),
    tabsBlock = document.querySelectorAll('.tabs-block'); //Initialization of variables

const removeClass = elems => {
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove('active-tab'); //remove "active" class
  }
};
const displayElem = elem => {
  elem.classList.add('active-tab'); //add "active" class - display elem
};
tasbList.addEventListener('click', event => { //event "click"
  const target = event.target;
  if (target.classList.contains('tabs-list-item')) {
    removeClass(tabsBlock);
    displayElem(tabsBlock[target.dataset.id]); // display element with number the same as id dataset number 
  }
});
