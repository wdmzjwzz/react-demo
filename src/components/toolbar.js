import React from 'react'
import { ThemeContext } from './theme-context';
import ThemedButton from './themed-button';



class Toolbar extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemedButton onClick={this.props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }
}
export default Toolbar