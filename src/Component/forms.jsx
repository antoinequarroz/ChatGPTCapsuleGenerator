import React, { useState } from "react";
function Form() {
    const [inputs, setInputs] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
    });

    const [generatedText, setGeneratedText] = useState("");
    const handleChange = event => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        generateText(inputs);
    };

    const generateText = async inputs => {
        const response = await fetch(
            `https://api.openai.com/v1/engines/text-davinci-002/jobs`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer <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>"
                },
                body: JSON.stringify({
                    prompt: `${inputs.input1} ${inputs.input2} ${inputs.input3} ${inputs.input4} ${inputs.input5} ${inputs.input6}`,
                    max_tokens: 100,
                    n: 1,
                    stop: "",
                    temperature: 0.5
                })
            }
        );
        const result = await response.json();
        setGeneratedText(result.choices[0].text);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Question et thème"
                value={inputs.input1}
                onChange={handleChange}
                placeholder="Question et thème"
            />
            <select value={inputs.input2}
                    onChange={handleChange}
                    name="Temps Capsule"
                    placeholder="Temps de la capsule">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <select value={inputs.input3}
                    onChange={handleChange}
                    name="Nbr modules"
                    placeholder="Nombre de modules">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <select value={inputs.input4}
                    onChange={handleChange}
                    name="Nbr sections"
                    placeholder="Nombre de sections">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <select value={inputs.input5}
                    onChange={handleChange}
                    name="Nbr genre"
                    placeholder="Genre">
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
            </select>

            <select value={inputs.input6}
                    onChange={handleChange}
                    name="Langue"
                    placeholder="Langue">
                <option value="Français">Français</option>
                <option value="Deutsch">Deutsch</option>
                <option value="English">English</option>
            </select>

            <button type="submit">Générer</button>
        </form>
        <div>
            <p>{generatedText}</p>
        </div>
    </div>
    );
}
export default Form;