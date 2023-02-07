import logo from './logo.svg';
import './App.css';
import Form from "./Component/forms";
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

      <body>
        <div className="Titre_h2"
            id="forms"
        >
            <h2>Formulaire de création</h2>
        </div>
        <div className="App_form">
          <Form/>
        </div>
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
