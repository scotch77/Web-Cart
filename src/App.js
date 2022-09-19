import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
          id: 3
        }
      ]
    }
  }

handleIncreaseQuantity = (product) => {
  console.log('Heyy please inc the qty of ', product);
  const { products } = this.state;
  const index = products.indexOf(product);

  products[index].qty += 1;

  this.setState({
    products
  })
}

handleDecreaseQuantity = (product) => {
  console.log('Heyy please dec the qty of ', product);
  const { products } = this.state;
  const index = products.indexOf(product);

  if(products[index].qty > 0)
    products[index].qty -= 1;

  this.setState({
    products
  })
}

handleDelete = (id) => {
  const { products } = this.state;
  const items = products.filter((item) => item.id !== id)

  this.setState({
    products: items
  })
}

getCount = () => {
  const {products} = this.state;

  let count = 0

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getTotal = () => {
  const {products} = this.state;

  let amount = 0;

  products.map((product) => {
    amount += product.qty * product.price;
  } )

  return amount;
}

render() {

  const { products } = this.state;

  return (
    <div className="App">
      <Navbar count = {this.getCount()}/>
      <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDelete={this.handleDelete}/>
        <div style={{fontSize: 20, padding: 10}}>Total Amount: {this.getTotal()}</div>
    </div>
  );
}

}


export default App;
