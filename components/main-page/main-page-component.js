import React, { Component } from 'react';
import { ImageBackground, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import MainButtonContainer from './buttons/main-button-container';

Sound.setCategory('Playback');

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
    };
  }

  render() {
    const { width } = this.state;
    const mainButtonSize = width / 4;
    const borderRadius = mainButtonSize / 2;
    return (
      <ImageBackground
        source={require('../../assets/image/chalkboard.jpg')}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}
      >
        <MainButtonContainer
          borderRadius={borderRadius}
          mainButtonSize={mainButtonSize}
        />
      </ImageBackground>
    );
  }
}

export default MainPage;