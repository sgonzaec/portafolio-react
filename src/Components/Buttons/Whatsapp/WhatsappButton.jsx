import React from "react";
import LanguageLogoByName from "../../../Helpers/logos";

const WhatsappButton = ({ phoneNumber, message, buttonText }) => {
    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
            {LanguageLogoByName('Whatsapp')}{'  '}{buttonText}
        </a>
    );
};

WhatsappButton.defaultProps = {
    phoneNumber: '34613225846',
    message: 'Hola, Estoy interesado en que trabajemos juntos',
    buttonText: 'Contact Me',
};

export default WhatsappButton;