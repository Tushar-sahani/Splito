
if (localStorage.getItem('name') === 'Avinash' || localStorage.getItem('name') === 'avinash') {
    let person1 = document.getElementById('person1');
    person1.innerHTML += localStorage.getItem('price');
}
else if (localStorage.getItem('name') === 'Abhinav' || localStorage.getItem('name') === 'abhinav') {
    let person2 = document.getElementById('person1');
    person2.innerHTML += localStorage.getItem('price');
}
else if (localStorage.getItem('name') === 'Andril' || localStorage.getItem('name') === 'andril') {
    let person3 = document.getElementById('person1');
    person3.innerHTML += localStorage.getItem('price');
}
function removeMember(){
    const element = document.getElementById('Andril');
    element.remove();
}
