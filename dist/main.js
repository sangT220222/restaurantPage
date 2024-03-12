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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVpQjs7Ozs7O1VDN0NqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDSDtBQUNJOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLCtDQUFZO0FBQ2xELHNDQUFzQywyQ0FBUTtBQUM5Qzs7QUFFQTtBQUNBLElBQUksbURBQVE7QUFDWixJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy9sb2FkTmF2LmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2thZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2thZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpZDogJ2hvbWUtMScsXG4gICAgICB0aXRsZTogJ1dlbGNvbWUgdG8gW1Jlc3RhdXJhbnQgTmFtZV0gLSBXaGVyZSBGbGF2b3IgTWVldHMgVHJhZGl0aW9ucycsXG4gICAgICBjb250ZW50OlsnW1Jlc3RhdXJhbnQgTmFtZV0gaW52aXRlcyB5b3UgdG8gaW5kdWxnZSBpbiBhbiB1bmZvcmdldHRhYmxlIGN1bGluYXJ5IGV4cGVyaWVuY2UgdGhhdCBjZWxlYnJhdGVzIHRoZSBlc3NlbmNlIG9mIFtjdWlzaW5lIHR5cGUgb3Igc3BlY2lhbHR5XS4gTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgW0NpdHkgb3IgTG9jYXRpb25dLCBvdXIgcmVzdGF1cmFudCBvZmZlcnMgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeSBhbmQgZXZlcnkgYml0ZSBpZ25pdGVzIHlvdXIgc2Vuc2VzLiddXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnaG9tZS0yJyxcbiAgICAgICAgdGl0bGU6ICdEaXNjb3ZlciBPdXIgQ3VsaW5hcnkgRGVsaWdodHM6JyxcbiAgICAgICAgY29udGVudDogWydFeHBsb3JlIG91ciBkaXZlcnNlIG1lbnUgZmVhdHVyaW5nIGEgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIGFuZCBjb250ZW1wb3JhcnkgZGlzaGVzIGNyYWZ0ZWQgd2l0aCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMuJyxcbiAgICAgICAgJ0V4cGVyaWVuY2UgdGhlIGFydGlzdHJ5IG9mIG91ciBjaGVmcyBhcyB0aGV5IHNraWxsZnVsbHkgYmxlbmQgZmxhdm9ycyBhbmQgdGV4dHVyZXMgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IHRhbnRhbGl6ZSB0aGUgdGFzdGUgYnVkcy4nLFxuICAgICAgICAgJ0ltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGFtYmlhbmNlIG9mIG91ciByZXN0YXVyYW50LCB3aGVyZSBlYWNoIHZpc2l0IHByb21pc2VzIGEgam91cm5leSBvZiBjdWxpbmFyeSBkZWxpZ2h0IGFuZCBkaXNjb3ZlcnkuJ11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdob21lLTMnLFxuICAgICAgICB0aXRsZTogJ0pvaW4gVXMgZm9yOicsXG4gICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdNZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2VzIHdpdGggZmFtaWx5IGFuZCBmcmllbmRzLicsXG4gICAgICAgICAgICAnSW50aW1hdGUgZGlubmVycyBvciBjZWxlYnJhdGlvbnMgaW4gb3VyIGNvenkgeWV0IGVsZWdhbnQgZGluaW5nIHNwYWNlcy4nLFxuICAgICAgICAgICAgJ1VuZm9yZ2V0dGFibGUgZmxhdm9ycyB0aGF0IGxlYXZlIGEgbGFzdGluZyBpbXByZXNzaW9uLidcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2hvbWUtNCcsXG4gICAgICAgIHRpdGxlOiAnSW5kdWxnZSB5b3VyIHBhbGF0ZSBhbmQgc2F0aXNmeSB5b3VyIGNyYXZpbmdzIGF0IFtSZXN0YXVyYW50IE5hbWVdLicsXG4gICAgICAgIGNvbnRlbnQ6IFtdXG4gICAgfVxuICBdO1xuICAgXG5cbmNvbnN0IGhvbWVfY29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50X2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JlJyk7XG4gICAgY29udGVudF9kaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uX2VsZW1lbnQuaWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSBzZWN0aW9uLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgc2VjdGlvbl9lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlX2VsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgaWYoc2VjdGlvbi5jb250ZW50ICYmIChzZWN0aW9uLmlkID09PSAnaG9tZS0yJyB8fCBzZWN0aW9uLmlkID09PSAnaG9tZS0zJykpIHsgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBcbiAgICAgICAgICAgIHNlY3Rpb24uY29udGVudC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgY29udGVudF9lbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHNlY3Rpb25fZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50X2VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBzZWN0aW9uLmNvbnRlbnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBjb250ZW50X2VsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWN0aW9uX2VsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudF9lbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnRfZGl2LmFwcGVuZENoaWxkKHNlY3Rpb25fZWxlbWVudCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtob21lX2NvbnRlbnR9IiwiY29uc3QgY3JlYXRlQnRuID0gKGlkLHRleHQpID0+e1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZCk7XG4gICAgYnRuLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLGlkKTtcblxuICAgIGNvbnN0IGhvbWVfYnRuID0gY3JlYXRlQnRuKCdob21lJywnSG9tZScpO1xuICAgIGNvbnN0IG1lbnVfYnRuID0gY3JlYXRlQnRuKCdtZW51JywnTWVudScpO1xuICBcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lX2J0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVfYnRuKTtcbiAgICAvL25hdmkuYXBwZW5kQ2hpbGQoYWJvdXRidG4pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuY29uc3QgbG9hZF9uYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcmVzdF9vZl90aGVfY29udGVudD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdF9vZl90aGVfY29udGVudC5pZCA9ICdjb3JlJ1xuICAgIGNvbnN0IG5hdl9zZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdignbmF2aScpO1xuICAgIG5hdl9zZWN0aW9uLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZfc2VjdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0X29mX3RoZV9jb250ZW50KTtcbn1cblxuZXhwb3J0IHtsb2FkX25hdn0iLCJcblxuY29uc3Qgc3RhcnRlcnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ01vbW8gKDYgcGllY2VzKScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05lcGFsZXNlIGR1bXBsaW5ncyBmaWxsZWQgd2l0aCBzcGljZWQgbWVhdCBvciB2ZWdldGFibGVzLCBzZXJ2ZWQgd2l0aCBkaXBwaW5nIHNhdWNlIC0gYWNoYWFyJyxcbiAgICAgIHByaWNlOiAnwqM3LjY5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3VrdXRpIENoaXVyYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRHJpZWQgbWVhdCAoc3VrdXRpKSBhbmQgYmVhdGVuIHJpY2UgKGNoaXVyYSksIHNlYXNvbmVkIHdpdGggc3BpY2VzICcsXG4gICAgICAgIHByaWNlOiAnwqM4LjIxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQWxvbyBEYW0nLFxuICAgICAgICB0aXRsZTogJ1NwaWN5IGFuZCBmbGF2b3JmdWwgcG90YXRvZXMgY29va2VkIGluIGEgcmljaCBhcm9tYXRpYyBncmF2eSwgd2l0aCB0b21hdG9lcywgb25pb25zLCBnaW5nZXIsIGdhcmxpYywgYW5kIGEgYmxlbmQgb2YgTmVwYWxlc2Ugc3BpY2VzLicsXG4gICAgICAgIHByaWNlOiAnNi44OSdcbiAgICB9LFxuICBdO1xuXG5jb25zdCBtZW51X3RhYiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50X2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29yZVwiKTtcbiAgICBjb250ZW50X2Rpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIHN0YXJ0ZXJzLmZvckVhY2ggKHN0YXJ0ZXIgPT57XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uaWQgPSBzdGFydGVyLm5hbWU7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBzdGFydGVyLm5hbWU7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc3RhcnRlci5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBzdGFydGVyLnByaWNlO1xuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAgICAgICBjb250ZW50X2Rpdi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9KVxufVxuXG5leHBvcnQge21lbnVfdGFifSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRfbmF2IH0gZnJvbSBcIi4vbG9hZE5hdlwiO1xuaW1wb3J0IHsgbWVudV90YWIgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBob21lX2NvbnRlbnQgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IGNvbnRlbnRfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgYWRkX25hdl9ldmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGNvbnN0IG1lbnVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcblxuICAgIGhvbWVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxob21lX2NvbnRlbnQpO1xuICAgIG1lbnVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtZW51X3RhYik7XG59XG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBsb2FkX25hdigpO1xuICAgIGhvbWVfY29udGVudCgpO1xuICAgIGFkZF9uYXZfZXZlbnRzKCk7XG59XG4gICBcbmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=