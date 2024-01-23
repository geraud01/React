const funcPromise = (condition) => {
    return new Promise ((resolve, reject) =>{
    console.log('promise')

    if (!condition){
        reject ();
    }
    resolve();
    });   
}

funcPromise(true)
    .them(() => {
        console.log("ok");
    })
    .cath(() => {
        console.log("error");
    });