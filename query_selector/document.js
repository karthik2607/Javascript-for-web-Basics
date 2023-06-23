const heading =document.querySelector('h1')

heading.innerText='Hello Karthik'

console.log(heading)

const line=document.querySelector('.hi')

line.innerText='hi Karthik Sudhan'

console.log(line)

const allitems=document.querySelectorAll('ul li')

for(let i=0;i<allitems.length;i++){
    const listItem=allitems[i]
    listItem.innerText='Y000000'
}
console.log(allitems)

//query selector can be used for any node but getElementbyId is only applicable for document.

//Adding event listener for the click me button

const incrementbutton= document.querySelector('#increment');

const decrementbutton=document.querySelector('#decrement');

const Ulelement=document.getElementById('list')



let count=0;

function incrementcounter(){
    
    const inc_count=document.getElementById('counter')
   
    count++

    inc_count.innerText=count

    //create an element
    const li=document.createElement('li')

    //setting the attribute for referencing at the decrementcounter
    li.setAttribute('data-counter',count)

    if(count%2 === 0){
        li.style.background='red'
        li.style.padding='10px'
    }
    else{
        li.style.background='yellow'
    }
    li.innerHTML='<b>Sentence</b> '+ count


    //append the child
    Ulelement.appendChild(li)
    

}

function decrementcounter(){
    const inc_count=document.getElementById('counter')

    //referencing data-counter from the increment counter
     const li=Ulelement.querySelector('[data-counter="'+count+'"]')
    // li.remove()

    //instead of doing the normal one while decrementing if we need decrement only the even numbers then do this
    const number=parseInt(li.getAttribute('data-counter'),10)

    if(number %2 === 0){
        li.remove()
    }
    count--
    inc_count.innerText=count

   
}

incrementbutton.addEventListener('click',incrementcounter)
decrementbutton.addEventListener('click',decrementcounter)


