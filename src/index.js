import './styles.css';
import dishesList from './menu.json';
import menuTemplate from './template/template.hbs';

document.addEventListener("DOMContentLoaded", () => {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const menuList = document.querySelector('.js-menu');
  const markup = menuTemplate((dishesList));
  menuList.insertAdjacentHTML('afterbegin', markup);
  const checkBox = document.querySelector('#theme-switch-toggle');
  const body = document.querySelector('body');
  let getTheme = localStorage.getItem('theme');

  if (getTheme === Theme.DARK) {
    body.classList.add('dark-theme');
    checkBox.checked = true;
  } else  {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }

  const getFromLocalstorage = () => {
    localStorage.getItem('theme');
  };

  const saveToLocalstorage = () => {
    localStorage.setItem('theme', getTheme);
    getFromLocalstorage()
  };

  const handleTheme = () => {

    if(body.classList.contains(Theme.LIGHT)) {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
      getTheme = Theme.DARK;
      saveToLocalstorage();

    } else if (checkBox.checked === true || body.classList.contains(Theme.DARK)) {
       body.classList.remove(Theme.DARK);
       body.classList.add(Theme.LIGHT);
       getTheme = Theme.LIGHT;
       saveToLocalstorage()
     }
   };

  checkBox.addEventListener('change', handleTheme);
});
