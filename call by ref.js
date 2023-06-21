const firstprofile={
    name:'karthik',
    age:19
}

const secondprofile={
    name:'sudhan',
    age:20
}

function mutate(obj){
    obj.age++
}

function primitiveMutate(primitive){
    primitive++
    console.log(primitive);
}

let num=100
primitiveMutate(num)
console.log(secondprofile)
mutate(firstprofile);
console.log(firstprofile);