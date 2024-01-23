
(() =>{

function name() {}
    const nameArow = (firstName) => {
        const addLastName = (name) => name + "Oliveira";

        return addLastName(firstName);
    };

    const loop = (number) => {
        console.log(number);
        if (number === 10) {
            return number
        }
        loop (++ number);
    };

    loop(6)

    
        console.log('executou')
})
