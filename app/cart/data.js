let age = 20;
let name = "song";

// If you want to use this info to other file
// You need to export like this first
// Only you can export one
// So if you want to export not only one
// {item1, item2} use like this
// And when you get import also you need to get same format
// import {age, name} "./data.js"

// export default age;
// when you export over 2 amounts, remove default
export { age, name };
