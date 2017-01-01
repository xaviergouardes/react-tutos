
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

const TabsExampleIcon = () => (
  <Tabs>
    <Tab icon={<ActionHome />} />
    <Tab icon={<ActionFlightTakeoff />} />
    <Tab icon={<ActionFavorite />} />
  </Tabs>
);

export default TabsExampleIcon;
