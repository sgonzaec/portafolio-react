import React from "react";
import LanguageLogoByName from "../../../Helpers/logos";

const WhatsappButton = () => {

    return (
        <a
            href={`https://wa.me/34613225846?text=${encodeURIComponent("Hola, Estoy interesado en que trabajemos juntos")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
            {LanguageLogoByName('Whatsapp')}{' '} Contact Me
        </a>
    );
};

export default WhatsappButton;