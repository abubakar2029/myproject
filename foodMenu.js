const fastFoodLi = [
    {
        name: "Big Mac",
        price: 6.99,
    },
    {
        name: "Chicken McNuggets 6 piece",
        price: 4.99,
    },
    {
        name: "Fries",
        price: 2.99,
    },
    {
        name: "Shake",
        price: 3.99,
    },
    {
        name: "McChicken Meal",
        price: 7.99,
    },
    {
        name: "Chicken McNuggets 10 piece",
        price: 6.99,
    },
    {
        name: "Double Cheeseburger",
        price: 4.99,
    },
    {
        name: "Filet-O-Fish",
        price: 5.99,
    },
    {
        name: "Apple Pie",
        price: 1.99,
    },
];

const shakesLi = [
    {
        name: "Vanilla Shake",
        price: 3.99,
    },
    {
        name: "Chocolate Shake",
        price: 3.99,
    },
    {
        name: "Stdawberry Shake",
        price: 3.99,
    },
    {
        name: "Coffee Shake",
        price: 4.99,
    },
    {
        name: "Oreo Shake",
        price: 4.99,
    },
    {
        name: "Mocha Shake",
        price: 4.99,
    },
    {
        name: "Peanut Butter Shake",
        price: 4.99,
    },
    {
        name: "Banana Split Shake",
        price: 5.99,
    },
    {
        name: "Cookie Dough Shake",
        price: 5.99,
    },
];

const fruitsLi = [
    {
        name: "Apple",
        price: 1.99,
    },
    {
        name: "Banana",
        price: 1.99,
    },
    {
        name: "Orange",
        price: 1.99,
    },
    {
        name: "Grapes",
        price: 1.99,
    },
    {
        name: "Pineapple",
        price: 2.99,
    },
    {
        name: "Watermelon",
        price: 2.99,
    },
    {
        name: "Stdawberries",
        price: 2.99,
    },
    {
        name: "Blueberries",
        price: 2.99,
    },
    {
        name: "Blackberries",
        price: 2.99,
    },
];

let currentMenuList='';
let nullInput1='';
/* create-menu function */
function menu(val) {
    /* Switch case to check menu list-name */
    switch (val) {
        case "fastFood":
            val = fastFoodLi;
            break;
        case "shakes":
            val = shakesLi;
            break;
        case "fruits":
            val = fruitsLi;
            break;
    
        default:
            return;
    }
    currentMenuList=val;

    displayMenu.innerText = '';
    let table = document.createElement('table');
    let btnTR=document.createElement('tr');
    let checkoutBtn=document.createElement('button');
    checkoutBtn.innerText='Checkout';
    checkoutBtn.onclick = calculateBill;

    nullInput1=document.createElement('input');
    nullInput1.value = 0;

    btnTR.append(checkoutBtn, nullInput1)
    for (const food of val) {
        let tr = document.createElement('tr');
        let nameTD = document.createElement('td');
        nameTD.innerText = food.name;

        let priceTD = document.createElement('td');
        priceTD.innerText = food.price;

        let checkboxTD = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkboxTD.appendChild(checkbox);

        let qtnTD = document.createElement('td');
        let qtn = document.createElement('input');
        qtn.type = 'number';
        qtnTD.appendChild(qtn);


        tr.append(nameTD, priceTD, checkboxTD, qtnTD);
        table.appendChild(tr);
    }
    table.appendChild(btnTR)
    displayMenu.appendChild(table);
}

/* calculate-bill function */
function calculateBill() {
    let totalBill = 0;
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    for (let i = 0; i < rows.length - 1; i++) {
        const checkbox = rows[i].querySelector('input[type="checkbox"]');
        const quantityInput = rows[i].querySelector('input[type="number"]');
        const priceTD = rows[i].querySelectorAll('td')[1];
        const price = parseFloat(priceTD.innerText);

        if (checkbox.checked) {
            let quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity <= 0) {
                quantity = 1;
            }
            totalBill += (price * quantity);
        }
    }
    nullInput1.value = totalBill; 
}


