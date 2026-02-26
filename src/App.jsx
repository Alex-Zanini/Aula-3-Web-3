import NomeAluno from "./components/NomeAluno";
import FraseDoDia from "./components/FraseDoDia";
import Caixa from "./components/Caixa";
import Rodape from "./components/rodape";
import Banner from "./components/Banner";
import Saudacao from "./components/saudacao";
import Card from "./components/card";
import BotaoAcao from "./components/BotaoAcao";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Main } from "./components/layout/Main";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
function avisar() {
    alert("Você clicou no botão!");
  }

function comprar() {
    alert("Compra realizada com sucesso!");
  }
  
 


  return (
    <>

      <h1 style={{color: "red"}}>Aula 3</h1>
       <h1>Eventos</h1>
       <BotaoAcao texto="Comprar" onAcao={comprar} />
      <div>

        <button onClick={avisar}>Clique aqui</button>
        <h1>Cards</h1>
        <Card titulo="Cadastro" texto="crie seu cadastro em poucos minutos." botaoTexto="Começar"/>
        <Card titulo="Relatórios" texto="Veja resultados semanais do seu processo." botaoTexto="Ver" />
      <h1>Saudações</h1>
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
      <Saudacao nome="Ana" />

      <h1 style={{color: "red"}}>Aula 2</h1>
        <Header />
        <Main>
          <Banner />
          <NomeAluno />
          <FraseDoDia />
          <Caixa />
          <Caixa />
          <Caixa />
        </Main>
        <Footer>
          <Rodape />
        </Footer>
      </div>

      
      
    </>
  );
}

export default App;
