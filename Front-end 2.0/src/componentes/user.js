import { Button } from 'reactstrap';
import React, {useState} from 'react'
import '../App.css';
import '../main.css';
import api from '../api'

function App(){

    const [name, setName] = useState('');

   async function handleSubmit(){
        const data = {
            name: name
        }
        
        const res = await api.post('/user', data);
        console.log(res)

        if(res.status === 200){
            window.location.href="/logado"
        }else{
            alert("Error: ")
        }
    }

    return (
        <div className="App">
            <h1 id="title">Seja bem vindo!</h1>
            <form>
                <input name="name" onChange={e => setName(e.target.value)} required minLength="3" id="input" type="text" placeholder="   Digite seu nome  : " /><br/>
                <Button type="submit" onClick={handleSubmit} id="btn">Entrar</Button>
            </form>   
        </div>
        
      );
}


export default App;