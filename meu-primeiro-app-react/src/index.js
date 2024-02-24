import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

//function f() {}
//const f = () =>

//escrever uma função que define um componente React que devolve o nome da disciplina

//escrever uma função que define um componente REact que devolve o seu nome completo

//Ajustar a função App para que ela devolva uma div que tem um p e o p mostra: Me chamo tal e estou cursando tal

const App = () => {
    const textoDoRotulo = 'Nome'
    const estiloDoBotao = {margin:'auto', width: 768, backgroundColor: '#EEE', paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none'}
    return(
        <div style={{ margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>
                {textoDoRotulo}
            </label>
            <input type="text" id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>
            <button style={estiloDoBotao}></button>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);