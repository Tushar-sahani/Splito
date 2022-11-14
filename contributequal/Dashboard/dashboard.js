// Date

let currentDate = new Date();
let month = currentDate.getMonth();
if (month < 10) {
    month = "0" + month;
}
let dateOfMonth = currentDate.getDate();
if (dateOfMonth < 10) {
    dateOfMonth = "0" + dateOfMonth;
}
let year = currentDate.getFullYear();
let formattedDate = dateOfMonth + "/" + month + "/" + year;


// random number for key
const key = document.getElementById('key');
let a = 6;
let random = Math.floor(Math.random() * (10 ** a));
key.innerHTML = random;

let i = 0;
let addItem = document.getElementById('addItem');
addItem.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    // localStorage.setItem("name", name);
    let price = document.getElementById('price').value;
    // localStorage.setItem("price", price);
    let item = document.getElementById('item').value;
    // localStorage.setItem("item", item);
    let tbodyEle = document.querySelector('tbody');

    let obj
    tbodyEle.innerHTML += `
    <tr>
        <th scope="row">${++i}</th>
        <td>${name}</td>
        <td>${item}</td>
        <td>${price}</td>
        <td>${formattedDate}</td>
    </tr>`;
})