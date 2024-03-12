import { load_nav } from "./loadNav";
import { menu_tab } from "./menu";
import { home_content } from "./home";

const content_div = document.getElementById('content');

const add_nav_events = () => {
    const home_btn = document.getElementById('home');
    const menu_btn = document.getElementById('menu');

    home_btn.addEventListener('click',home_content);
    menu_btn.addEventListener('click',menu_tab);
}

function init(){
    load_nav();
    home_content();
    add_nav_events();
}
   
init();