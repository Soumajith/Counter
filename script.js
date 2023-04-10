const counter = document.querySelector(".counter");


const increment = () => {
    let value = parseInt(counter.innerText);
    value = value + 1;
    counter.innerText = value;
};
const decrement = () => {
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.innerText = value;
};

console.log("Hello world");
