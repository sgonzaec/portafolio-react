import React from 'react';
import Switcher from '../../Components/Switcher/Switcher';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Switcher',
  component: Switcher,
  argTypes: {
    personalImageSwitcher: { control: 'boolean', description: 'Estado inicial del switch' },
  },
};

const Template = (args) => {
  const handleToggle = (newState) => {
    args.personalImageSwitcher = newState;
    action('Switch toggled')(newState);
  };

  return (
    <Switcher
      personalImageSwitcher={args.personalImageSwitcher}
      setPersonalImageSwitcher={handleToggle}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  personalImageSwitcher: true,
};