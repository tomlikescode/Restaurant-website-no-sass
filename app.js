const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// ***** toggle sidebar ******
toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

// ***** close sidebar ******
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});


// ***** fixed navbar *****
const navbar = document.getElementById('nav');

window.addEventListener('scroll', ()=> {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const special = document.getElementById('special');
    const specialOffset = special.getBoundingClientRect().top;
    const boxSpecial = document.querySelector('.box-special');

    // console.log(boxSpecial);

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (specialOffset < 400) {
        boxSpecial.classList.add('box-move');
    } else {
        boxSpecial.classList.remove('box-move');
    }

    
})

// ****Weekdays****

const weekday = [
    {
        id: "Sunday",
        food: "Steak",
        img: './images/steak.jpg'
    },
    {
        id: "Monday",
        food: "Fish",
        img: './images/fish.jpg'
    },
    {
        id: "Tuesday",
        food: "Tacos",
        img: './images/tacos.jpg'
    },
    {
        id: "Wednesday",
        food: "Pasta",
        img: './images/pasta.jpg'
    },
    {
        id: "Thursday",
        food: "Ribs",
        img: './images/ribs.jpg'
    },
    {
        id: "Friday",
        food: "Pizza",
        img: './images/pizza.jpg'
    },
    {
        id: "Saturday",
        food: "Burgers",
        img: './images/burger.jpg'
    }
];


const whichDay = document.getElementById('special-date');
const whichFood = document.getElementById('special-food');
const whichImg = document.getElementById('special-img');

// let whichDay = weekday[day].id;
// let whichFood = weekday[day].food;
// let whichImg = weekday[day].img;

let d = new Date();
let day = d.getDay();

window.addEventListener('DOMContentLoaded', ()=> {
    const item = weekday[day];
    whichDay.textContent = item.id;
    whichFood.textContent = item.food;
    whichImg.src = item.img;
})

const menu = [
    {
        id: 1,
        title: "Steak",
        category: "meat",
        price: 39.99,
        img: './images/steak.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 2,
        title: "Fish",
        category: "seafood",
        price: 19.99,
        img: './images/fish.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 3,
        title: "Tacos",
        category: "meat",
        price: 15.99,
        img: './images/tacos.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 4,
        title: "Pasta",
        category: "carbs",
        price: 18.99,
        img: './images/pasta.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 5,
        title: "Ribs",
        category: "meat",
        price: 24.99,
        img: './images/ribs.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 6,
        title: "Pizza",
        category: "carbs",
        price: 19.99,
        img: './images/pizza.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 7,
        title: "Burgers",
        category: "meat",
        price: 10.99,
        img: './images/burger.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 8,
        title: "Soda",
        category: "drinks",
        price: 4.99,
        img: './images/soda.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 9,
        title: "Juice",
        category: "drinks",
        price: 3.99,
        img: './images/juice.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
    {
        id: 10,
        title: "Milk",
        category: "drinks",
        price: 3.99,
        img: './images/milk.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, omnis?`,
    },
];

// get parent element
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
// display all items when the page loads
window.addEventListener("DOMContentLoaded", ()=> {
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item)=> {
        // console.log(item);

        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                    <div class="menu-header">
                        <h4 class="menu-header-title">${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </div>
                    <p class="item-text">
                        ${item.desc};
                    </p>
                </div>
            </article>`
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu)
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    
    const categories = menu.reduce( 
        (values, item)=> {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    // console.log(categories)

    const categoryBtns = categories.map((category)=>{
        return `<button type="button" class="filter-btn" 
                data-id=${category}>${category}</button>`;
    }).join("");

    // console.log(categoryBtns)

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
    // console.log(filterBtns);

    filterBtns.forEach((btn)=> {
        btn.addEventListener('click', (e)=> {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem)=> {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}


