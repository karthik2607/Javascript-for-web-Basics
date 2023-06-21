const myAge=22
if(true){
    // const myAge=27(if this is commented the previous myage will be considered tht is meant by shadow)
    function printage(){
        console.log(myAge)
    }
    printage();
}