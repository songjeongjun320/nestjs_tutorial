import { age, name } from "./data.js";
// 'use client'

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart{age}</h4>
      <div className="cart-item">
        <p>Product Name</p>
        <p>$40</p>
        <p>count 1</p>
      </div>
      <CartItem_Component />
      <CartItem_Component />
      <CartItem_Component />
    </div>
  );
}

/* 
Next.js has two types of Components
1. Server component
2. Client component
*/

/* When you make component, make it outside of the other function */
/* If you just make the component, It is (Server component) */
function CartItem_Component() {
  return (
    <div className="cart-item">
      <p>Product Name</p>
      <p>$40</p>
      <p>count 1</p>
    </div>
  );
}

/* 
If you make the component, and you put 'use client' on the top 
All of them are (Client component)
You can't put javascript func to html in server component 
But in (client component), you can use javascript in html 

Usually you need to use (Client Component)
Because you can use more features from javascript

But (Server Component) has fast loading speed
*/
