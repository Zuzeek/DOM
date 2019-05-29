/*
// add event listener 
const myHeading = document.getElementById('heading'); 

// changes the color of a heading when clicked on it 
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
}); 

// select element by ID
const heading = document.getElementById('heading'); 
const input = document.getElementById('input'); 
const button = document.getElementById('button'); 

// type text: 'blue' inside the input and it will change heading color
button.addEventListener('click', () => {
    heading.style.color = input.value; 
})

// select elements by particular type 
// document.getElementsByTagName
const el = document.getElementById('a'); 
const els = document.getElementsByTagName('p'); 

// selecting an element by index 
const els = document.getElementsByTagName('p'); 
let el = els[0]; 

// select element using loop 
const els = document.getElementsByTagName('p'); 
for (let i = 0; i < els.length; i++) {
    els[i]; 
}
*/ 
/*
const list = document.getElementsByTagName('li')
list.length
list[0]
list[3]
list[0].style.color = 'red'
*/ 

/* 
// target elements 
const list = document.getElementsByTagName('li'); 
console.log(list)
console.log(list.length)


// change color of each element 
for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'orange'; 
}

document.getElementsByClassName('not-orange'); 
const notOrange = document.getElementsByClassName('not-orange'); 

for (let i = 0; i < notOrange.length; i++) {
    notOrange[i].style.color = 'red'; 
}
*/ 

/*
// querySelector
// querySelectorAll 
document.querySelectorAll('li')
document.querySelector('li')
document.querySelector('#heading')
document.querySelector('.list-parent')
document.querySelectorAll('.green')
*/ 

const listItems = document.querySelectorAll('li:child(even)'); 
console.log(listItems); 
console.log(listItems)