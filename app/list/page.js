/* 
Nextjs offer the Automative routing.
If you just create folder, the folder name will be the route to pass the other page
So here, I put app/list/page.js, If you want to make the other pages.
Create more folders and put page.js file inside of it.

Format should be same with other next.js file. Don't use just html file structure
*/

/* Usually function name is Folder name */
export default function List() {
    return (
     <div>
      <h4 className="title">Products List</h4>
      <div className="food">
        <h4>Product 1 $40</h4>
      </div>
      <div className="food">
        <h4>Product 2 $40</h4>
      </div>
     </div>
    );
  }