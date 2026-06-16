// JSX In React And Js In JSX

// import React from 'react'


// function App() {
//   const name = "raza"
//   const age = 20

//   return (
//     <div>
//       <h1>Student name is {name}</h1>
//       <h2>Student age is {age}</h2>
//     </div>
//   )
// }

// export default App


// Simple functional Component in React
// CREATED A FOLDER IN SRC NAME {COMPONENTS} IN COMPONENT FOLDER CREATED A USERCARDS.JSX FILE 
// IN USERCARD.JSX WE CREATED A SIMPLE UI AND IMPORT IT IN APP FILE TO USE 
// NOTE ** THIS IS WITHOUT PROPS DRILLING

// import React from 'react'
// import Usercards from './components/Usercards'

// function App() {
//   return (
//     <div style={{display:"flex"}}>
//       <Usercards name="hassan" role="student" status="online"/>
//       <Usercards name="faizan" role="teacher" status="online"/>
//       <Usercards name="saim" role="worker" status="offline"/>

//     </div>
//   )
// }

// export default App

// PROPS PASSING / List Rendering

// import React from 'react'
// import { cardsData } from './components/Cardsdata'
// import Usercards from './components/Usercards'


// function App() {
//   return (
//     <div>
//         <h1>Courses Cards</h1>
//     <div style={{display:'flex'}}>
//       {cardsData.map((Course)=>{
//         return(
//             <Usercards  
//             key={Course.id}
//             title={Course.title}
//             price={Course.price}
//             rating={Course.rating}
//             />
//       )
//       })}</div>
//     </div>
//   )
// }

// export default App


// Props drilling is a process in React where data is passed from a top-level parent component down to a deeply nested child component through several intermediate components, which act merely as a courier service because they do not actually need that data. We avoid using it in large projects because it creates unnecessary code redundancy, makes the codebase extremely difficult to maintain, and tracking down bugs or renaming props across five to ten levels becomes a nightmare. Instead of forcing middle components to pass down irrelevant data, developers prefer alternatives like the React Context API or Redux, which allow the data to fly directly from the source to the target component without touching the ones in between.


// Use state with UI control logic.
// everyone teach you to make a counter with you state but i will show you real use case.

// import React, { useState } from 'react'


// function App() {
//     const [toggle, settoggle] = useState("light");

// function changetoggle() {
//     settoggle(toggle === "light" ? "dark" : "light")
// }

//   return (
//     <div style={{ border:"2px solid black",backgroundColor: toggle === "light" ? "white" : "black", width:"200px", color: toggle === "light" ? "black" : "white"}}>
//       <h1>Hello</h1>
//       <button onClick={changetoggle}>
//         Chagne to {toggle === "light" ? "dark" : "light"} mode
//       </button>


//       </div>
//   )
// }

// export default App

// import React, { useState } from 'react';

// function Sidebar() {
//   // State banayi: shuru mein sidebar band (false) hoga
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Button par click karne se state ulti (toggle) ho jayegi */}
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
//       </button>

//       {/* Agar isOpen true hai, toh sidebar dikhao, nahi toh chhupa do */}
//       <div style={{
//         width: '250px',
//         height: '100vh',
//         backgroundColor: '#333',
//         color: '#fff',
//         position: 'fixed',
//         left: isOpen ? '0px' : '-250px', // UI control logic
//         transition: '0.3s' // Smooth animation ke liye
//       }}>
//         <h3>Sidebar Menu</h3>
//         <ul>
//           <li>Home</li>
//           <li>Profile</li>
//           <li>Settings</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
