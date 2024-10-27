import React from 'react';
import WhatsappButton from '../../Components/Buttons/Whatsapp/WhatsappButton';

export default {
  title: 'Components/WhatsappButton',
  component: WhatsappButton,
  argTypes: {
    phoneNumber: { control: 'text', description: 'Número de teléfono en formato internacional' },
    message: { control: 'text', description: 'Mensaje de texto que será enviado a través de WhatsApp' },
    buttonText: { control: 'text', description: 'Texto que se muestra en el botón' },
  },
};

const Template = (args) => <WhatsappButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  phoneNumber: '1234567890',
  message: 'Hola, Estoy interesado en que trabajemos juntos',
  buttonText: 'Contact Me',
};