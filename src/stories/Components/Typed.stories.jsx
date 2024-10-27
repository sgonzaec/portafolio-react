import React from 'react';
import Typed from '../../Components/Typed/Typed';

export default {
  title: 'Components/Typed',
  component: Typed,
  argTypes: {
    titles: {
      control: 'array',
      description: 'Lista de títulos que el componente mostrará rotativamente',
      defaultValue: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    },
  },
};

const Template = (args) => <Typed {...args} />;

export const Default = Template.bind({});
Default.args = {
  titles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
};