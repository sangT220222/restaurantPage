import momo from "../assets/momo.jpeg";

const starters = [
    {
      name: 'Momo (6 pieces)',
      description: 'Nepalese dumplings filled with spiced meat or vegetables, served with dipping sauce - achaar',
      price: '£7.69'
    },
    {
        name: 'Sukuti Chiura',
        description: 'Dried meat (sukuti) and beaten rice (chiura), seasoned with spices ',
        price: '£8.21'
    },
    {
        name: 'Aloo Dam',
        title: 'Spicy and flavorful potatoes cooked in a rich aromatic gravy, with tomatoes, onions, ginger, garlic, and a blend of Nepalese spices.',
        price: '6.89'
    },
  ];

const momo_img = () => {
    const pic = new Image();
    pic.src = momo;
  
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

        const price = document.createElement('span');
        price.textContent = starter.price;

        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(price);

        if (starter.name.toUpperCase() === 'MOMO (6 PIECES)'){
            section.appendChild(momo_img());
        }

        content_div.appendChild(section);
    })
}

export {menu_tab} 