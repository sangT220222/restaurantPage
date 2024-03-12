import { load_nav } from "./modules/loadNav";
import { menu_tab } from "./modules/menu";
import { home_content } from "./modules/home";
import  "./style.css";

const add_nav_events = () => {
    const home_btn = document.getElementById('home');
    const menu_btn = document.getElementById('menu');

    home_btn.addEventListener('click',home_content);
    menu_btn.addEventListener('click',menu_tab);
}

const init = () => {
    load_nav();
    home_content();
    add_nav_events();
}
   
init();