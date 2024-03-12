import momo from "../assets/momo.jpeg";
import sukuti from "../assets/sukuti_chatpate.jpeg";
import aloo from "../assets/aloo.jpeg";

const starters = [
    {
      name: 'Momo (6 pieces)',
      description: 'Nepalese dumplings filled with spiced meat or vegetables, served with dipping sauce - achaar',
      price: '£7.69'
    },
    {
        name: 'Sukuti Chatput',
        description: 'Dried meat mixed with a variety of spices and seasonings.',
        price: '£8.21'
    },
    {
        name: 'Aloo Dam',
        description: 'Spicy and flavorful potatoes cooked in a rich aromatic gravy, with tomatoes, onions, ginger, garlic, and a blend of Nepalese spices.',
        price: '£6.89'
    },
  ];

const momo_img = () => {
    const pic = new Image();
    pic.src = momo;
  
    return pic;
}

const sukuti_img = () => {
    const pic = new Image();
    pic.src = sukuti;
  
    return pic;
}

const aloo_img = () => {
    const pic = new Image();
    pic.src = aloo;
  
    return pic;
}

const menu_tab = () => {
    const content_div = document.getElementById("core");
    content_div.innerHTML = '';

    starters.forEach (starter =>{
        const section = document.createElement('section');
        section.id = starter.name;

        const name = document.createElement('h2');
        name.textContent = starter.name;

        const description = document.createElement('p');
        description.textContent = starter.description;

        const price = document.createElement('p');
        price.textContent = starter.price;

        section.appendChild(name);        

        if (starter.name.toUpperCase() === 'MOMO (6 PIECES)'){
            section.appendChild(momo_img());
        }
        else if (starter.name.toUpperCase() === 'SUKUTI CHATPUT'){
            section.appendChild(sukuti_img());
        }
        else {
            section.appendChild(aloo_img());
        }
        
        section.appendChild(description);
        section.appendChild(price);

        content_div.appendChild(section);
    })
}

export {menu_tab} 