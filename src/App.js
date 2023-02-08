import logo from './logo.svg';
import './App.css';
import Form from "./Component/forms";
import Formular from "./Component/form_test";
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
          <div className="App_form">
                <h2 id="forms">
                    Formulaire de création</h2>
              <Form/>
            </div>

        <div className="App_form">
            <h2 id="forms">
                Formulaire de création</h2>
            <Formular/>
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
