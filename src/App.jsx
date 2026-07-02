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


// EVENT HANDlING IN REACT :-
// 1. onClick Event

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [count, setcount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button
//       onClick={()=>setcount(count+1)}
//       >+1</button>
//     </div>
//   )
// }

// export default App

// different way to use onclick 
// Named funtion
// <button onClick={handleBuyClick}>Buy Now</button>


// 2. onChange Event

// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [onChange, setonChange] = useState('');
//   return (
//     <div>
//       <h1>{onChange}</h1>
//       <input type="text" 
//       placeholder='Write something to track'
//       value={onChange}
//       onChange={e => setonChange(e.target.value)}
//       />
//     </div>
//   )
// }

// export default App


// 3. onSubmit Event

// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [name, setname] = useState('');
//     const [message, setmessage] = useState('');

//     function handlesubmit(e) {
//         e.preventDefault();
//         setmessage(name)
//     }
//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <label>Enter your name</label>
//         <input type="text" 
//         value={name}
//         onChange={e => setname(e.target.value)}
//         />
//         <button type='submit'>submit</button>
//       </form>
//       {message !== '' && <p style={{ fontWeight: 'bold', color: 'blue' }}>{message}</p>}
//     </div>
//   )
// }

// export default App

// 4. onMouse event :-


// import React, { useState } from 'react';

// function HoverCard() {
//   // State: shuru mein card ka background color 'white' hoga
//   const [bgColor, setBgColor] = useState('white');

//   return (
//     <div 
//       // Jab mouse andar aaye toh state 'yellow' kar do
//       onMouseEnter={() => setBgColor('lightyellow')}
//       // Jab mouse bahar jaye toh wapas 'white' kar do
//       onMouseLeave={() => setBgColor('white')}
//       style={{
//         backgroundColor: bgColor,
//         border: '2px solid #333',
//         padding: '30px',
//         textAlign: 'center',
//         transition: '0.3s', // Smooth color change ke liye
//         cursor: 'pointer'
//       }}
//     >
//       <h3>Is Card Par Mouse Lekar Aao!</h3>
//       <p>Abhi background color hai: **{bgColor}**</p>
//     </div>
//   );
// }

// export default HoverCard

// import React, { useState } from 'react';

// export default function HoverDropdown() {
//   // State to track if the dropdown menu is visible
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div 
//       style={containerStyle}
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button style={buttonStyle}>
//         Hover Me ▾
//       </button>

//       {isOpen && (
//         <ul style={menuStyle}>
//           <li style={itemStyle}><a href="#profile">Profile</a></li>
//           <li style={itemStyle}><a href="#settings">Settings</a></li>
//           <li style={itemStyle}><a href="#logout">Logout</a></li>
//         </ul>
//       )}
//     </div>
//   );
// }

// // Simple Inline Styles for Demonstration
// const containerStyle = {
//   position: 'relative',
//   display: 'inline-block',
// };

// const buttonStyle = {
//   backgroundColor: '#007bff',
//   color: 'white',
//   padding: '10px 20px',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };

// const menuStyle = {
//   position: 'absolute',
//   top: '100%',
//   left: 0,
//   backgroundColor: 'white',
//   boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
//   listStyle: 'none',
//   padding: '10px 0',
//   margin: 0,
//   minWidth: '150px',
//   borderRadius: '4px',
//   transition : '0.3s',
//   zIndex: 1,
// };

// const itemStyle = {
//   padding: '8px 16px',
// };

// onKey down/up Event :-

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [keyStatus, setkeyStatus] = useState('koi key nhi dabhi howi');
//     const [lastPressedkey, setlastPressedkey] = useState('');

//   return (
//     <div>
//       <h3>Track keyBoard keys</h3>
//       <input type="text" 
//       onKeyDown={(e)=>{
//         setkeyStatus("key Dabi hoi hy...");
//         setlastPressedkey(e.key);
//       }}

//       onKeyUp={()=>{
//         setkeyStatus('key chod di hy')
//       }}
//       />
//       <div>
//         <h3>Stauts : {keyStatus}</h3>
//         <h3>Last key : {lastPressedkey}</h3>
//       </div>


//     </div>
//   )
// }

// export default App


// Conditional Rendering in React
// 1. ternary operator '?' ':'

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [theme, settheme] = useState('light');

//   return (
//     <div style={{height:'200px', width:'200px', backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
//       <h1>Hasnain</h1>
//       <h3>Full Stack Developer</h3>
//       <button onClick={()=> settheme(theme === 'light' ? 'dark' : 'light')}>
//         {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
//       </button>
//     </div>
//   )
// }

// export default App

// 2. && Operator 

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [visiblity, setvisiblity] = useState(false);

//   return (
//     <div>
//     <div style={{display:"flex"}}>
//       <h1>What is React</h1>
//       <button style={{height:'20px', marginTop:'30px' }} onClick={()=> setvisiblity(true)}>
//         ?
//       </button>
//       </div>
//       {visiblity && (
//         <p style={{backgroundColor:'lightgray'}}>React is library</p>
//       )}
//     </div>
//   )
// }

// export default App

// 3. if/else statement

// import React, { useState } from 'react';

// function App() {
//   // 1. State banayi jiski shuruati value 'loading' hai
//   const [pageState, setPageState] = useState('loading');

//   // 2. AGAR state 'loading' hai, toh YAHI SE LOADING WALA UI RETURN KAR DO!
//   // React isse neche wale return par jayega hi nahi.
//   if (pageState === 'loading') {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1>Loading... Please Wait ⏳</h1>
//         <p>Website ka data load ho raha hai.</p>
//         {/* Button par click karne se state 'home' ho jayegi */}
//         <button onClick={() => setPageState('home')}>
//           Go to Home Page
//         </button>
//       </div>
//     );
//   }

//   // 3. AGAR state 'loading' nahi hai (yani 'home' ho chuki hai), 
//   // toh React upar wale if ko chor kar is neeche wale return par aa jayega.
//   return (
//     <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
//       <h1>Welcome to Home Page! 🎉</h1>
//       <p>Yeh hamari asli website ka data hai jo loading ke baad dikhna tha.</p>
      
//       {/* Wapas check karne ke liye button */}
//       <button onClick={() => setPageState('loading')}>
//         Wapas Load Karo
//       </button>
//     </div>
//   );
// }

// export default App;

// 4. Switch Case Statement for multiple conditions

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [Status, setStatus] = useState('idle');

//     function RenderStatus(){
//         switch(Status){
//             case 'idle' :
//                 return <p>abhi download shuru nhi howa</p>
//             case 'loading':
//                 return <p>Loading ho rhi hy</p>
//             case 'success':
//                 return <p>Downloaded</p>
//             case 'error' :
//                 return <p>Oops Something Wrong</p>
//             default :
//                 return null;
            
//         }
//     }
//   return (
//     <div>
//       <h1>Download your file</h1>
//       <div><RenderStatus/></div>
//       <button onClick={()=> setStatus('loading')}>Start Download</button>
//       <button onClick={()=> setStatus('success')}>Simulate success</button>
//       <button onClick={()=> setStatus('error')}>Simulate error</button>
//     </div>
//   )
// }

// export default App

// 5. Object lookup


// function Spinner(){
//     return <h1>Loading hori hy</h1>
// }

// function Success(){
//     return <h1>Successfull</h1>
// }

// function Error(){
//     return <h1>Some error Detected</h1>
// }

// const Status_UI = {
//     loading : <Spinner/>,
//     success : <Success/>,
//     error : <Error/>

// }



// import React from 'react'
// import { useState } from 'react'

// function App() {
//     const [Status, setStatus] = useState('loading');
//   return (
//     <div>
//       <div>{Status_UI[Status]}</div>
//       <button onClick={() => setStatus('loading')}>Set Loading</button>
//       <button onClick={() => setStatus('success')}>Set Success</button>
//       <button onClick={() => setStatus('error')}>Set Error</button>
//     </div>
//   )
// }

// export default App


// 1  .map() Array Method


// 2 .filter() Array Method

// import React from 'react'
// import {useState} from 'react'

// function App() {

//     const productsData = [
//   { id: 1, name: "Notebook", price: 400, category: "home" },
//   { id: 2, name: "Desk Lamp", price: 1800, category: "home" },
//   { id: 3, name: "Sunglasses", price: 2200, category: "style" },
//   { id: 4, name: "Backpack", price: 3500, category: "style" },
//   { id: 5, name: "Headphones", price: 8500, category: "tech" },
//   { id: 6, name: "Keyboard", price: 12000, category: "tech" },
//   { id: 7, name: "Phone", price: 42000, category: "tech" },
//   { id: 8, name: "Laptop", price: 85000, category: "tech" }
// ];

//     const [SearchTerm, setSearchTerm] = useState('');

//     const filterProducts = productsData.filter((product)=>{
//         return product.name.toLowerCase().includes(SearchTerm.toLowerCase());
//     })

//   return (
//     <div>
//         <h1>Search here</h1>
//         <input type="text"
//         placeholder="Search Products"
//         value={SearchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <h3>Products</h3>
//         <ul>
//             {filterProducts.length > 0 ? (
//                 filterProducts.map((product)=>(
//                     <li key={product.id}>
//                         {product.name} - Rs {product.price} ({product.category})</li>
//                 ))
//             ):(
//                 <p>Nothing Found</p>
//             )}
//         </ul>
//     </div>
//   );
// }

// export default App


// 3.  .filter() + .Sort() Array Method

// import React from 'react'
// import {useState} from 'react'

// function App() {

//     const productsData = [
//   { id: 1, name: "Notebook", price: 400, category: "home" },
//   { id: 2, name: "Desk Lamp", price: 1800, category: "home" },
//   { id: 3, name: "Sunglasses", price: 2200, category: "style" },
//   { id: 4, name: "Backpack", price: 3500, category: "style" },
//   { id: 5, name: "Headphones", price: 8500, category: "tech" },
//   { id: 6, name: "Keyboard", price: 12000, category: "tech" },
//   { id: 7, name: "Phone", price: 42000, category: "tech" },
//   { id: 8, name: "Laptop", price: 85000, category: "tech" }
// ];

//     const [SearchTerm, setSearchTerm] = useState('');
//     const [Sort, setSort] = useState('');

//     const filterProducts = productsData.filter((product)=>{
//         return product.name.toLowerCase().includes(SearchTerm.toLowerCase());
//     })

//     const sortedProducts = [...filterProducts].sort((a,b)=>{
//      if (Sort === 'name')       return a.name.localeCompare(b.name);
//     if (Sort === 'price-low')  return a.price - b.price;
//     if (Sort === 'price-high') return b.price - a.price;

//     return 0;
//     })

//   return (
//     <div>
//         <h1>Search here</h1>
//         <input type="text"
//         placeholder="Search Products"
//         value={SearchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <h3>Products</h3>
//         <ul>
//             {sortedProducts.length > 0 ? (
//                 sortedProducts.map((product)=>(
//                     <li key={product.id}>
//                         {product.name} - Rs {product.price} ({product.category})</li>
//                 ))
//             ):(
//                 <p>Nothing Found</p>
//             )}
//         </ul>

//         <button onClick={()=> setSort('price-low')}>low to high</button>
//         <button onClick={()=> setSort('price-high')}>hight to low</button>

//     </div>
//   );
// }

// export default App


// todo with filter method


// import React from 'react'
// import { useState } from 'react'

// function App() {

//   const initialTasks = [
//     {id:1 , tittle : "Home Work"}
//   ]

//     const [task, settask] = useState(initialTasks);
//     const [textInput, settextInput] = useState('');

//     const addTask = (e)=>{
//       e.preventDefault();
//       if (textInput.trim() === '') return;
    


//     const newTaskObj = {
//       id : Date.now(),
//       tittle : textInput
//     }
  
//     settask(pre => [...pre, newTaskObj]);
//     settextInput('');
//   }
//     const deleteTask = (id)=>{
//       settask(pre => pre.filter(task => task.id !== id));
//     };

//   return (
//     <div>
//       <h1>Add your todos</h1>
//       <form onSubmit={addTask}>
//         <input type="text" 
//         value={textInput}
//         onClick={(e)=> settextInput(e.target.value)}
//         />
//         <button type='submit'>Add Task</button>
//       </form>
//       <ul>
//         {task.length > 0 ? 
//         (task.map((task) =>(<li key={task.id}>{task.tittle}
//         <button onClick={()=>deleteTask(task.id)}>Delete Task</button>
//         </li>))):(
//           <p>Sare kaam khatam! Sakoon hi sakoon</p>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App


// first project completed try it on github-project-xi.vercel.app

// Now our phase 2 is started 

// useEffect() HOOK


// import React from 'react'
// import {useState,useEffect} from 'react'
// function App() {
//     const [qoute, setQoute] = useState('loading');

//     useEffect(() => {
//         fetch("https://dummyjson.com/quotes/random")
//         .then((response)=> response.json())
//         .then((data)=>{
//             const Quote = data.quote
//             setQoute(Quote)
//         })
//     }, []);


//   return (
//     <div>
//       <h1>Random Quotes</h1>
//       <h3>{qoute}</h3>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {useState,useEffect} from 'react'   


// function App() {

//     const [text, setText] = useState('');

//     useEffect(() => {
//         if(text.length > 20){
//             alert("Text limit Full")
//         }
//     }, [text])
    
//   return (
//     <div>
//       <input type="text" 
//       value={text}
//       onChange={ e => setText(e.target.value)}      
//       />
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // 1. Humne ek interval (timer) shuru kiya jo har 1 second baad chalega
//     const myTimer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//       console.log("Timer chal raha hai..."); 
//     }, 1000);

//     // 2.  CLEANUP FUNCTION
//     // Jab yeh page band hoga, toh React is return wale function ko khud chalaye ga
//     return () => {
//       clearInterval(myTimer); //  Yeh bol raha hai: "Timer ko abhi rok do!"
//       console.log("Component band hogaya, timer ruk gaya!");
//     };

//   }, []); // Empty array yani sirf page khulne par shuru hoga

//   return <h1>Seconds: {seconds}</h1>;
// }

// export default App;


// useRef() Hook

// 1. Accessing & Interacting with DOM Elements 

// import React from 'react'
// import {useRef} from 'react'

// function App() {

//     const inputRef = useRef()

//     function handleFocus(){
//         inputRef.current.focus()

//         inputRef.current.style.color = 'white'
//         inputRef.current.style.backgroundColor = 'black'
//     }

//     function handleDoubleFocus(){
//         inputRef.current.focus()

//         inputRef.current.style.color = ''
//         inputRef.current.style.backgroundColor = ''
//     }

//   return (
//     <div>
//         <input ref={inputRef}/>
//         <br/>
//         <button onClick={handleFocus} onDoubleClick={handleDoubleFocus}>Focus input</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState,useRef } from 'react'

// function App() {


//     const [seconds, setSeconds] = useState(0);
//     const timerIdRef = useRef(null)


//     const handleStart = ()=>{

//         if (timerIdRef.current !== null) return;

//         timerIdRef.current = setInterval(()=>{
//             setSeconds((pre)=> pre + 1)
//         },10)
//     }

//     const handleStop = ()=>{
//         clearInterval(timerIdRef.current)
//         timerIdRef.current = null
//         console.log(timerIdRef.current)
//     }

//   return (
//    <div style={{ textAlign: 'center', marginTop: '40px' }}>
//       <h1>Time Counter: {seconds}s</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop} style={{ marginLeft: '10px' }}>Stop</button>
//     </div>
//   )
// }

// export default App


// import React, { useState, useRef } from 'react';

// function App() {
//   const [renderCount, setRenderCount] = useState(0); // Sirf component ko refresh karne ke liye

//   // 1. Ek aam JavaScript variable
//   let normalVariable = 0;

//   // 2. Ek useRef wala dabba
//   const refVariable = useRef(0);

//   const handleTest = () => {
//     normalVariable = normalVariable + 1; // Variable ko barhaya
//     refVariable.current = refVariable.current + 1; // Ref ko barhaya

//     console.log("Normal Variable:", normalVariable);
//     console.log("useRef Variable:", refVariable.current);

//     // Ab hum state badal kar component ko RE-RENDER (refresh) karenge
//     setRenderCount(prev => prev + 1);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '40px' }}>
//       <h3>Component Kitni Baar Refresh Hua: {renderCount}</h3>
      
//       <button onClick={handleTest}>Value Barhao Aur Render Karo</button>
      
//       <p>Console mein dekho farq kya aa raha hai!</p>
//     </div>
//   );
// }

// export default App;