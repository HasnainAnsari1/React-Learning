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