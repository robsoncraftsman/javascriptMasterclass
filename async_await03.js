function sumComPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) {reject("Invalid values")};
        setTimeout(function() {
            resolve(a + b);
        }, Math.random() * 1000);
    });    
};

// Usar "for of" para processos assíncronos dentro de um loop
(async function() {
    try {
        const promises = [
            sumComPromise(3, 3),
            sumComPromise(2, 2)
        ];
        const results = [];
   
        for (const promisse of promises) {
            const result = await promisse;
            results.push(result);
        }

        const [a, b] = results;
        console.log(a); //undefined
        console.log(b); //undefined
        const result = await sumComPromise(a, b); // Invalid values
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();