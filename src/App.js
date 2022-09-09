import React,{ useEffect, useState } from "react";


function MyComponent() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
         // setIsLoaded(true);
          setItems(result);
          console.log(items);
        },
  
       
      )
  }, [])





  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //      // setIsLoaded(true);
  //       setItems(result);
  //       console.log(items);
  //     },

     
  //   )


    return <img width="100" src={items.message}/>
   
}

function App(){

  
    return (
    <div>
        <h1>Welcome to My APP</h1>
        <MyComponent />
    </div>
    );
}

export default App;