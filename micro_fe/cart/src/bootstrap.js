import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>
      <h1>
        You have ${faker.random.number()} in your moderfucking cart.
      </h1>
    </div>`
  
  el.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector("#dev-cart")

  if(el) {
    mount(el)
  }
}

export { mount };