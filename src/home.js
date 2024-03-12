const sections = [
    {
      id: 'home-1',
      title: 'Welcome to [Restaurant Name] - Where Flavor Meets Traditions',
      content:['[Restaurant Name] invites you to indulge in an unforgettable culinary experience that celebrates the essence of [cuisine type or specialty]. Nestled in the heart of [City or Location], our restaurant offers a warm and inviting atmosphere where every dish tells a story and every bite ignites your senses.']
    },
    {
        id: 'home-2',
        title: 'Discover Our Culinary Delights:',
        content: ['Explore our diverse menu featuring a fusion of traditional and contemporary dishes crafted with locally-sourced ingredients.',
        'Experience the artistry of our chefs as they skillfully blend flavors and textures to create dishes that tantalize the taste buds.',
         'Immerse yourself in the ambiance of our restaurant, where each visit promises a journey of culinary delight and discovery.']
    },
    {
        id: 'home-3',
        title: 'Join Us for:',
        content: [
            'Memorable dining experiences with family and friends.',
            'Intimate dinners or celebrations in our cozy yet elegant dining spaces.',
            'Unforgettable flavors that leave a lasting impression.'
        ]
    },
    {
        id: 'home-4',
        title: 'Indulge your palate and satisfy your cravings at [Restaurant Name].',
        content: []
    }
  ];
   

const home_content = () => {
    const content_div = document.getElementById('core');
    content_div.innerHTML = '';
    
    sections.forEach(section => {
        const section_element = document.createElement('section');
        section_element.id = section.id;
        
        const title_element = document.createElement('h2');
        title_element.textContent = section.title;
        
        section_element.appendChild(title_element);
        
        if(section.content && (section.id === 'home-2' || section.id === 'home-3')) { 
            const content_element = document.createElement('ul');
        
            section.content.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            content_element.appendChild(listItem);
            });
        
            section_element.appendChild(content_element);
        }
        else{
            const content_element = document.createElement('div');
        
            section.content.forEach(item => {
            const paragraph = document.createElement('p');
            paragraph.textContent = item;
            content_element.appendChild(paragraph);
            });
            
            section_element.appendChild(content_element);
        
        }
        
        content_div.appendChild(section_element);
    })
}

export {home_content}