import React from 'react';
import Tabs from '../../Components/Tabs/Tabs';
import tab_list_data from '../../Components/Tabs/TabsStructure/tab_list_data.json'

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tab_list_data,
};