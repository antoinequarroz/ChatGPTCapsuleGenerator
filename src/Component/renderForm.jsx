import React, { useState } from "react";

const RenderForm = () => {
    const [generatedText, setGeneratedText] = useState("");

    return (
        <div>
            <form>
                <textarea className="Render_textaera" value={generatedText} readOnly />
            </form>
        </div>
    );
};

export default RenderForm;