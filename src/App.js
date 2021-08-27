 import './App.css';
 import {useState,useEffect} from 'react';
 // not default export
 import {items} from './items';
function App() {

  // myItems is different from items to avoid naming conflicts
  let [myItems,setMyItems] = useState(items); 
  let [cleared,setCleared] = useState(false);
  // useEffect(()=>{
    // if(cleared)
    // {
    //  setMyItems(localStorage.getItem('empty'))
    // }
    // },[])
  let clear=  ()=> {
    // clear the list of items   E.G change from [{key:1,name:'pizza'}] to []
     setMyItems([]) 
    //  setCleared(true)
    //  localStorage.getItem('empty',[])
  }

  let deleteItem = (key) => (
     // fuck didn't pass item to fitler
     // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     setMyItems(myItems.filter((item)=>item.key!==key))
    
  )
  return (
    <div className="App">
     {
       myItems.map((item)=> {
         return(
           <div key={item.key}> 
       <li className="item"    >
         {item.key} . {item.name}
         </li>
        <button onClick={()=>deleteItem(item.key)}>Delete item</button>
        </div>
       )
     
    })}
     <button onClick={clear}>Clear List</button>
    </div>
  );
}

export default App;
