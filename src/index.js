import './styles.css';
import dishesList from './menu.json';
import menuTemplate from './template/template.hbs';

document.addEventListener("DOMContentLoaded", () => {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const menuListRef = {
    menuList: document.querySelector('.js-menu'),
    markup: menuTemplate((dishesList)),
    checkBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  };
  menuListRef.menuList.insertAdjacentHTML('afterbegin', menuListRef.markup);

  let storedTheme = localStorage.getItem('theme');

  if (storedTheme === Theme.DARK) {
    menuListRef.body.classList.add('dark-theme');
    menuListRef.checkBox.checked = true;
  } else  {
    menuListRef.body.classList.remove(Theme.DARK);
    menuListRef.body.classList.add(Theme.LIGHT);
  }

  const handleTheme = () => {

    if(menuListRef.body.classList.contains(Theme.LIGHT)) {
      menuListRef.body.classList.remove(Theme.LIGHT);
      menuListRef.body.classList.add(Theme.DARK);
      storedTheme = Theme.DARK;
      localStorage.setItem('theme', storedTheme);

    } else if (menuListRef.body.classList.contains(Theme.DARK)) {
      menuListRef.body.classList.remove(Theme.DARK);
      menuListRef.body.classList.add(Theme.LIGHT);
      storedTheme = Theme.LIGHT;
      localStorage.setItem('theme', storedTheme);
     }
   };

  menuListRef.checkBox.addEventListener('change', handleTheme);
});
