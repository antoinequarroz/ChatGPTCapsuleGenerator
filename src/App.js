import logo from './logo.svg';
import './App.css';
import Form from "./Component/form";
import RenderForm from "./Component/renderForm";
import ButtonLink from "./Component/ButtonLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Créer une capsule vidéo facilement grâce au <code>IA</code>
        </p>
        <a
          className="App-link"
          href="#forms"
          rel="noopener noreferrer"
        >
          Aller au formulaire
        </a>
      </header>

       <body className="App_form">
            <h2 id="forms">
                Formulaire de création</h2>
            <Form/>
            <br/>
            <h2>Rendu de l'AI</h2>
            <RenderForm/>
            <ButtonLink/>
      </body>

        <footer>
            <div className="App_footer">
                <p>(c) Antoine Quarroz 2023</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
