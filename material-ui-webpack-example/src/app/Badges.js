import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    float: 'right',
  },
};


/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class ChipExampleSimple extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>


        <Chip style={styles.chip} >
          <Avatar size={16}>A</Avatar>
        Text Avatar Chip
      </Chip>


        <Chip style={styles.chip}>
          <Avatar size={16}>A</Avatar>
          Text Avatar Chip
        </Chip>

      </div>
    );
  }
}
