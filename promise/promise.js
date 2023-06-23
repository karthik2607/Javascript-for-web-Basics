const promiseobject=fetch('/data.json')

promiseobject.then(response =>{
    const prom=response.json()
    prom.then(data =>{
        console.log(data)
    })
})