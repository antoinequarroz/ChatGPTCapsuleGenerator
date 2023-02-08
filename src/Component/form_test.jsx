import React, { useState } from 'react';
import { Configuration, OpenAIApi} from "openai";

const Formular = () => {
    const [text, setText] = useState('');
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');
    const [select4, setSelect4] = useState('');
    const [select5, setSelect5] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Réponses du formulaire :');
        console.log(`Text : ${text}`);
        console.log(`Select 1 : ${select1}`);
        console.log(`Select 2 : ${select2}`);
        console.log(`Select 3 : ${select3}`);
        console.log(`Select 4 : ${select4}`);
        console.log(`Select 5 : ${select5}`);

        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Crée moi une formation de 25 heure (Ajouter l'input du formulaire à la place du nombre) qui sera faite en capsules vidéo de (Nbr de modules et de section) en (Langues). La thématique sera l'introduction à la santé digitale (Input 1 de la question). Propose moi une table des matière et scénario. Et par la suite créer moi un texte de 25 lignes pour chaques modules et sections de cette formation.",
            temperature: 0.39,
            max_tokens: 3841,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        // Faire une requête API vers OpenAI ici, en utilisant text, select1, select2, etc. pour construire la requête
        // Enregistrer la réponse dans un fichier texte
    };

    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <div>
                <label className="App_label">Question et thème</label>
                <br/>
                    <textarea
                        name="Question et thème"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Question et thème"
                    />
            </div>

            <div>
                <label className="App_label">Temps de la capsule</label>
                <br/>
                    <select
                        value={select1}
                        onChange={e => setSelect1(e.target.value)}
                        name="Temps Capsule"
                        placeholder="Temps de la capsule">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>
            </div>

            <div>
                <label className="App_label">Nombre de modules</label>
                <br/>
                    <select value={select2}
                            onChange={e => setSelect2(e.target.value)}
                            name="Nbr modules"
                            placeholder="Nombre de modules">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                    </select>
            </div>

            <div>
                <label className="App_label">Nombre de sections</label>
                <br/>
                    <select
                        value={select3}
                        onChange={e => setSelect3(e.target.value)}
                        name="Nbr sections"
                        placeholder="Nombre de sections">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                    </select>
            </div>

            <div>
                <label className="App_label">Langue</label>
                <br/>
                    <select
                        value={select4}
                        onChange={e => setSelect4(e.target.value)}
                        name="Nbr genre"
                        placeholder="Genre">
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
            </div>

            <div>
                <label className="App_label">Genre</label>
                <br/>
                    <select
                        value={select5}
                        onChange={e => setSelect5(e.target.value)}
                        name="Langue"
                        placeholder="Langue">
                            <option value="Français">Français</option>
                            <option value="Deutsch">Deutsch</option>
                            <option value="English">English</option>
                    </select>
            </div>
            <button type="submit">Générer</button>
        </form>
    );
};

export default Formular;


/*
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Crée moi une formation de 25 heure (Ajouter l'input du formulaire à la place du nombre) qui sera faite en capsules vidéo de (Nbr de modules et de section) en (Langues). La thématique sera l'introduction à la santé digitale (Input 1 de la question). Propose moi une table des matière et scénario. Et par la suite créer moi un texte de 25 lignes pour chaques modules et sections de cette formation.",
    temperature: 0.39,
    max_tokens: 3841,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});
*/