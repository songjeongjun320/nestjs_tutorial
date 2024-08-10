/* 
Nextjs offer the Automative routing.
If you just create folder, the folder name will be the route to pass the other page
So here, I put app/list/page.js, If you want to make the other pages.
Create more folders and put page.js file inside of it.

Format should be same with other next.js file. Don't use just html file structure
*/

/* Usually function name is Folder name */

import Image from "next/image";

export default function List() {
  //  Assume products variable get data from DB
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let prices = [40, 50, 60];
  let array = [2, 3, 4];

  // How to use map, It is repeating function
  // map func can have two parameters, first one is going to be each item
  // Second is gonna be index
  array.map((item, index) => {
    console.log(item);
    console.log(index);
  });

  // The other way to use map function
  // you can make the other array whenever map return, that value is added to array
  let tmp = array.map(function () {
    return 10;
  });
  console.log(tmp);

  return (
    <div>
      <h4 className="title">Products List</h4>
      {products.map((item, index) => {
        return (
          <div className="food" key={index}>
            {/* Always try to put the img through Image tag
                It will resolve "Lazy Loading, Layout shift, Size optimization" */}
            <img src={`./food${index}.png`} className="food-img" />
            <h4>
              {item} ${prices[index]}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
