const createBtn = (id,text) =>{
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.innerHTML = text;
    return btn;
}

const createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id',id);

    const home_btn = createBtn('home','Home');
    const menu_btn = createBtn('menu','Menu');
  

    nav.appendChild(home_btn);
    nav.appendChild(menu_btn);
    //navi.appendChild(aboutbtn);

    return nav;
}

const load_nav = () => {
    const content = document.getElementById('content');
    const rest_of_the_content= document.createElement('div');
    rest_of_the_content.id = 'core'
    const nav_section = document.createElement('section');
    const nav = createNav('navi');
    nav_section.appendChild(nav);
    content.appendChild(nav_section);
    content.appendChild(rest_of_the_content);
}

export {load_nav}