import React, { useState } from 'react';
import '../main.css';
import axios from 'axios'



  function Logado(){
    
    const [count, setCount] = useState(0);
    const [img, setImg] = useState();
    const [name, setName] = useState();
    const [like, setLike] = useState('');

    /* const data = {
      like:like
  } */


    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').then((res)=>{
          setImg(res.data.photos[1].img_src) 
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        });
    
      axios.get('http://localhost:8081/user').then((res)=>{
       setName(res.data[0].name);
        console.log(res)
     }).catch((err)=>{
      console.log(err)
    })


   /* async function Like(){
      await axios.put("http://localhost:8081/like", data).then((res) =>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    } */


    return(
        <div  className="App1">

          <h1 id="title">Olá {name} </h1>
          <hr/>
              
            <img alt="Imagem" src={img}/>

            <p id="like">Likes {count}</p>
            <button id="btn1" onClick={() => setCount(count + 1)}> Like </button>
       
      </div> 
    );
}

export default Logado;
