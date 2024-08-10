/* Main Page */

export default function Home() {
  let name = 'Song'
  let link = 'https://google.com'
  return (
   <div>
    <h4 className="title">Jun Fresh</h4>
    <p className="title-sub">by Jun {name}</p>
    <a href="/list">Product List</a>
   </div>
  );
}
