const toppings = document.getElementsByClassName('topping');


for ( const topping of toppings) {
  topping.addEventListener('click', (e) => {
    console.log(e.target.innerText)
  });
}

