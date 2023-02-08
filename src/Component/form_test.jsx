import React, { useState, useEffect } from 'react';

const Formular = () => {
    const [text, setText] = useState('');
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');
    const [select4, setSelect4] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const newOptions = [];
        for (let i = 1; i <= 25; i++) {
            newOptions.push(<option key={i} value={i}>{i}</option>);
        }
        setOptions(newOptions);
    },[]);

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('https://api.openai.com/v1/engines/text-davinci/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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',
                    },
                body: JSON.stringify({
                prompt: `Crée moi une formation de ${select1} heures qui sera faite en capsules vidéo de ${select2} et ${select3} en  ${select4}. La thématique sera${text}.Propose-moi une table des matière et scénario. Et par la suite créer moi un texte de 25 lignes pour chaque modules et sections de cette formation.`,
                    temperature: 0.39,
                    max_tokens: 3841,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
            }),
        });
        const json = await response.json();
        console.log(json.choices[0].text);
    };
        // Faire une requête API vers OpenAI ici, en utilisant text, select1, select2, etc. pour construire la requête
        // Enregistrer la réponse dans un fichier texte

    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <div>
                <label className="App_label">Thème de la capsule</label>
                <br/>
                    <textarea
                        name="Thème de la capsule"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Thème de la capsule"
                    />
            </div>

            <div>
                <label htmlFor="choix" className="App_label">Temps de la capsule</label>
                <br/>
                    <select
                        id="choix"
                        value={select1}
                        onChange={e => setSelect1(e.target.value)}
                        name="Temps Capsule"
                        placeholder="Temps de la capsule">
                        {options}
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