/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home_content: () => (/* binding */ home_content)
/* harmony export */ });
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



/***/ }),

/***/ "./src/loadNav.js":
/*!************************!*\
  !*** ./src/loadNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load_nav: () => (/* binding */ load_nav)
/* harmony export */ });
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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu_tab: () => (/* binding */ menu_tab)
/* harmony export */ });


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

const menu_tab = () => {
    const content_div = document.querySelector(".content");
    
    starters.forEach = (starter =>{
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

        content_div.appendChild(section);
    })  

}

 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadNav */ "./src/loadNav.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




const content_div = document.getElementById('content');

const add_nav_events = () => {
    const home_btn = document.getElementById('home');
    const menu_btn = document.getElementById('menu');

    home_btn.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_2__.home_content);
    menu_btn.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__.menu_tab);
}

function init(){
    ;(0,_loadNav__WEBPACK_IMPORTED_MODULE_0__.load_nav)();
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.home_content)();
    add_nav_events();
}
   
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVpQjs7Ozs7O1VDN0NqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDSDtBQUNJOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLCtDQUFZO0FBQ2xELHNDQUFzQywyQ0FBUTtBQUM5Qzs7QUFFQTtBQUNBLElBQUksbURBQVE7QUFDWixJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy9sb2FkTmF2LmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2thZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2thZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpZDogJ2hvbWUtMScsXG4gICAgICB0aXRsZTogJ1dlbGNvbWUgdG8gW1Jlc3RhdXJhbnQgTmFtZV0gLSBXaGVyZSBGbGF2b3IgTWVldHMgVHJhZGl0aW9ucycsXG4gICAgICBjb250ZW50OlsnW1Jlc3RhdXJhbnQgTmFtZV0gaW52aXRlcyB5b3UgdG8gaW5kdWxnZSBpbiBhbiB1bmZvcmdldHRhYmxlIGN1bGluYXJ5IGV4cGVyaWVuY2UgdGhhdCBjZWxlYnJhdGVzIHRoZSBlc3NlbmNlIG9mIFtjdWlzaW5lIHR5cGUgb3Igc3BlY2lhbHR5XS4gTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgW0NpdHkgb3IgTG9jYXRpb25dLCBvdXIgcmVzdGF1cmFudCBvZmZlcnMgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeSBhbmQgZXZlcnkgYml0ZSBpZ25pdGVzIHlvdXIgc2Vuc2VzLiddXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnaG9tZS0yJyxcbiAgICAgICAgdGl0bGU6ICdEaXNjb3ZlciBPdXIgQ3VsaW5hcnkgRGVsaWdodHM6JyxcbiAgICAgICAgY29udGVudDogWydFeHBsb3JlIG91ciBkaXZlcnNlIG1lbnUgZmVhdHVyaW5nIGEgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIGFuZCBjb250ZW1wb3JhcnkgZGlzaGVzIGNyYWZ0ZWQgd2l0aCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMuJyxcbiAgICAgICAgJ0V4cGVyaWVuY2UgdGhlIGFydGlzdHJ5IG9mIG91ciBjaGVmcyBhcyB0aGV5IHNraWxsZnVsbHkgYmxlbmQgZmxhdm9ycyBhbmQgdGV4dHVyZXMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IHRhbnRhbGl6ZSB0aGUgdGFzdGUgYnVkcy4nLFxuICAgICAgICAgJ0ltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGFtYmlhbmNlIG9mIG91ciByZXN0YXVyYW50LCB3aGVyZSBlYWNoIHZpc2l0IHByb21pc2VzIGEgam91cm5leSBvZiBjdWxpbmFyeSBkZWxpZ2h0IGFuZCBkaXNjb3ZlcnkuJ11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdob21lLTMnLFxuICAgICAgICB0aXRsZTogJ0pvaW4gVXMgZm9yOicsXG4gICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdNZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2VzIHdpdGggZmFtaWx5IGFuZCBmcmllbmRzLicsXG4gICAgICAgICAgICAnSW50aW1hdGUgZGlubmVycyBvciBjZWxlYnJhdGlvbnMgaW4gb3VyIGNvenkgeWV0IGVsZWdhbnQgZGluaW5nIHNwYWNlcy4nLFxuICAgICAgICAgICAgJ1VuZm9yZ2V0dGFibGUgZmxhdm9ycyB0aGF0IGxlYXZlIGEgbGFzdGluZyBpbXByZXNzaW9uLidcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2hvbWUtNCcsXG4gICAgICAgIHRpdGxlOiAnSW5kdWxnZSB5b3VyIHBhbGF0ZSBhbmQgc2F0aXNmeSB5b3VyIGNyYXZpbmdzIGF0IFtSZXN0YXVyYW50IE5hbWVdLicsXG4gICAgICAgIGNvbnRlbnQ6IFtdXG4gICAgfVxuICBdO1xuICAgXG5cbmNvbnN0IGhvbWVfY29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50X2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JlJyk7XG4gICAgY29udGVudF9kaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uX2VsZW1lbnQuaWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSBzZWN0aW9uLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgc2VjdGlvbl9lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlX2VsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgaWYoc2VjdGlvbi5jb250ZW50ICYmIChzZWN0aW9uLmlkID09PSAnaG9tZS0yJyB8fCBzZWN0aW9uLmlkID09PSAnaG9tZS0zJykpIHsgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBcbiAgICAgICAgICAgIHNlY3Rpb24uY29udGVudC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgY29udGVudF9lbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHNlY3Rpb25fZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50X2VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBzZWN0aW9uLmNvbnRlbnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBjb250ZW50X2VsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWN0aW9uX2VsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudF9lbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKHNlY3Rpb25fZWxlbWVudCk7XG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCB7aG9tZV9jb250ZW50fSIsImNvbnN0IGNyZWF0ZUJ0biA9IChpZCx0ZXh0KSA9PntcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsaWQpO1xuICAgIGJ0bi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBidG47XG59XG5cbmNvbnN0IGNyZWF0ZU5hdiA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZCk7XG5cbiAgICBjb25zdCBob21lX2J0biA9IGNyZWF0ZUJ0bignaG9tZScsJ0hvbWUnKTtcbiAgICBjb25zdCBtZW51X2J0biA9IGNyZWF0ZUJ0bignbWVudScsJ01lbnUnKTtcbiAgXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZV9idG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51X2J0bik7XG4gICAgLy9uYXZpLmFwcGVuZENoaWxkKGFib3V0YnRuKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmNvbnN0IGxvYWRfbmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHJlc3Rfb2ZfdGhlX2NvbnRlbnQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc3Rfb2ZfdGhlX2NvbnRlbnQuaWQgPSAnY29yZSdcbiAgICBjb25zdCBuYXZfc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoJ25hdmknKTtcbiAgICBuYXZfc2VjdGlvbi5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2X3NlY3Rpb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdF9vZl90aGVfY29udGVudCk7XG59XG5cbmV4cG9ydCB7bG9hZF9uYXZ9IiwiXG5cbmNvbnN0IHN0YXJ0ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdNb21vICg2IHBpZWNlcyknLFxuICAgICAgZGVzY3JpcHRpb246ICdOZXBhbGVzZSBkdW1wbGluZ3MgZmlsbGVkIHdpdGggc3BpY2VkIG1lYXQgb3IgdmVnZXRhYmxlcywgc2VydmVkIHdpdGggZGlwcGluZyBzYXVjZSAtIGFjaGFhcicsXG4gICAgICBwcmljZTogJ8KjNy42OSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N1a3V0aSBDaGl1cmEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RyaWVkIG1lYXQgKHN1a3V0aSkgYW5kIGJlYXRlbiByaWNlIChjaGl1cmEpLCBzZWFzb25lZCB3aXRoIHNwaWNlcyAnLFxuICAgICAgICBwcmljZTogJ8KjOC4yMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Fsb28gRGFtJyxcbiAgICAgICAgdGl0bGU6ICdTcGljeSBhbmQgZmxhdm9yZnVsIHBvdGF0b2VzIGNvb2tlZCBpbiBhIHJpY2ggYXJvbWF0aWMgZ3JhdnksIHdpdGggdG9tYXRvZXMsIG9uaW9ucywgZ2luZ2VyLCBnYXJsaWMsIGFuZCBhIGJsZW5kIG9mIE5lcGFsZXNlIHNwaWNlcy4nLFxuICAgICAgICBwcmljZTogJzYuODknXG4gICAgfSxcbiAgXTtcblxuY29uc3QgbWVudV90YWIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgXG4gICAgc3RhcnRlcnMuZm9yRWFjaCA9IChzdGFydGVyID0+e1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmlkID0gc3RhcnRlci5uYW1lO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gc3RhcnRlci5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHN0YXJ0ZXIuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gc3RhcnRlci5wcmljZTtcblxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgICAgICAgY29udGVudF9kaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgfSkgIFxuXG59XG5cbmV4cG9ydCB7bWVudV90YWJ9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZF9uYXYgfSBmcm9tIFwiLi9sb2FkTmF2XCI7XG5pbXBvcnQgeyBtZW51X3RhYiB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGhvbWVfY29udGVudCB9IGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgY29udGVudF9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBhZGRfbmF2X2V2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBob21lX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgY29uc3QgbWVudV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuXG4gICAgaG9tZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhvbWVfY29udGVudCk7XG4gICAgbWVudV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG1lbnVfdGFiKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGxvYWRfbmF2KCk7XG4gICAgaG9tZV9jb250ZW50KCk7XG4gICAgYWRkX25hdl9ldmVudHMoKTtcbn1cbiAgIFxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==