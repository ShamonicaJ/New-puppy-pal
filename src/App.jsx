import { useState } from 'react';
import { puppyList } from './data.js';

// function App() {
//   const [puppies, setPuppies] = useState(puppyList);

//   return (
//     <div>
//       { 
//         puppies.map((puppy) => {
//           return <p>{puppy.name}</p>
//         })
//       }
//     </div>
//   );
// }

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}

export default App;

























// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import React from 'react'; 
// import {puppyList} from './data.js'
// function App() {
//   // const [count, setCount] = useState(0)
//   console.log(puppyList)
//   return (
 
//       <div>

//       </div>
      
//   )
// }

// export default App
