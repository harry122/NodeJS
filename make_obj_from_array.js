var arr = ['Mobile','Charger','HeadPhones','Ram','Watch','Mouse'];

let prod = arr.map((ele) =>{
    return {
        name: ele,
        price : 225,
        rating : 4,
        description : "Good Product"
    }
});

console.log(prod);