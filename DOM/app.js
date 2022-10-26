
// document.body.style.backgroundColor = 'blue'
// document.body.style.color = 'red';
// document.getElementById('btn').style.color ='purple'
// // Lets assing to a varibles if there are multiple things we wabt to do on an element to avoid writing document .
// // DRY : Dont Repeat Yourself
// let body = document.body.style
// body.backgroundColor = 'green'

// The process of raching and selecting elements is called querrying the DOM(documen object model), and we have diff methods of querying the DOM as stated below:

// 1. =============getElementById ('element')================
// ---make sure the id matches
// ---We can assign to a varaible or just go straight using document.grtElementById continously 
// ---Lets do basic things, so we can understsn dbecause we would go into complex situations which would inturn neeed the basic things we have learnt .

//  Lets select the h1 tag
// // document.getElementById('title').style.color = 'yellow';

// document.getElementById('title').style.color = 'red'
// //  lets selsct btn
// let btn = document.getElementById('btn').style
// btn.backgroundColor = 'red'
// btn.color = 'white'

// // ====getElementByTagName('tagname)
// HTML-Collection = array-like Object
// index, length properties,but not all array methods would work(cant use forEach)
// let Header = document.getElementsByTagName('h2')
// console.log(Header);
// Header[0].style.color='orange'


// // we need to convert the two h2 to orange color .Therefore:
// let newHeader = [...Header]
// newHeader.forEach((h)=>{
// console.log(h);
// h.style.color ='orange'

// })

// ===getElementByClassname=====
// ---with classnamr we can select multiple elements
// ---select the elements or group of elements you want
// decide the effects you want to be on the selection

// let itemsListed = document.getElementsByClassName('special')
// console.log(itemsListed);
// itemsListed[2].style.color = 'purple'
// itemsListed.forEach((e)=>{
//     console.log(e);
// })
// let koretLisedItems = [...itemsListed]
// koretLisedItems.forEach(function(xx){
//     console.log(xx);
// })

// ====querySelector and querySelectorAll=====
// querySelector ('any css seletor')----select single element. the firs element it comes in contact would e selected
// select the elemenr or group of element you want
// // Decide the effect you want to apply second selection yo u need to put hastack ot dot to queryselector . it wont automatically pick the element.

// let anodaItem = document.querySelector('#title')
// console.log(anodaItem);
// anodaItem.style.color = 'red'

// let singleItems = document.querySelector('.special')
// console.log(singleItems);

// // querySelectorAll()---selects all forEach would work here
// const li = document.querySelectorAll('.special')
// console.log(li);
// li.forEach((itx)=>{
//     console.log(itx);
//     itx.style.color = 'green'
// })

// // innertext
// let para = document.querySelector ('p')
// console.log(para);
// para.innerText +=  ' and Jasper is here'

// // text content 
// let Header = document.querySelector('h3')
// console.log(Header.textContent);
// console.log(Header.innerText);

// // innerHTML
// let change = document.querySelector('.html')
// change.innerHTML = '<h1>We don change am finally</h1>'

// // changing attribute
// const link =document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com')

// link.innerText = 'link to facebook'
// console.log(link.innerText);


// //  Class name and Class List
// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const third = document.getElementById('third')

// const classValue = first.className
// console.log(classValue);
// // les chexk if an element has a class using contains
// let result =  second.classList.contains('colors')
// console.log(result);

// if (result){
//     console.log('it has it');
// }else{
//     console.log('it doesnt');
// }

// Event
// Select element
// addEventListener()
// what event , what to do

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')

function changeColor(){
    let hasClass = heading.classList.contains('red')
    if(hasClass){
        heading.classList.remove('red')
    }else{
        heading.classList.add('red')
    }
}
btn.addEventListener('click',changeColor)