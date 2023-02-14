import React, { useState } from "react";

const ButtonLink = () => {

    return (
        <div>
            <h3 className="headerTextStyle">Télécharger dans les formats suivant</h3>
            <button className="buttonLinkStyle">PDF</button>
            <button className="buttonLinkStyle">CSV</button>
        </div>
    );
};

export default ButtonLink;