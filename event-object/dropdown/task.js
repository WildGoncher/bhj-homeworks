const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');
const dropdown = document.querySelectorAll('.dropdown');



function dropdownClose () { 
    dropdownValue.addEventListener("click", () =>{
    dropdownList.classList.toggle('dropdown__list_active');
    })
}
dropdownClose();

function dropdownUp () {
    dropdownList.classList.toggle('dropdown__list_active');
}

let linkArray = Array.from(dropdownLink);

linkArray.forEach((el, i) => {

el.addEventListener('click', (e) =>{
    e.preventDefault();
    dropdownValue.textContent = el.textContent;
    dropdownUp ();
});
});
