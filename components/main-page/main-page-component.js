import React, { Component } from 'react';
import { ImageBackground, Dimensions, View } from 'react-native';
import Sound from 'react-native-sound';
import MainButtonContainer from './buttons/main-button-container';
import SecondaryButtonContainer from './buttons/secondary-button-container';

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
    const secondaryButtonSize = width / 5;
    const secondartyBorderRadius = secondaryButtonSize / 2;
    return (
      <ImageBackground
        source={require('../../assets/image/chalkboard.jpg')}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}
      >
        <View
        style={{ marginTop: 20 }}
        >
        <SecondaryButtonContainer
          index={1}
          borderRadius={borderRadius}
          mainButtonSize={secondaryButtonSize}
        />
        </View>
        <SecondaryButtonContainer
          index={2}
          borderRadius={borderRadius}
          mainButtonSize={secondaryButtonSize}
        />
        <SecondaryButtonContainer
          index={3}
          borderRadius={borderRadius}
          mainButtonSize={secondaryButtonSize}
        />
        <SecondaryButtonContainer
          index={4}
          borderRadius={borderRadius}
          mainButtonSize={secondaryButtonSize}
        />
        <MainButtonContainer
          borderRadius={borderRadius}
          mainButtonSize={mainButtonSize}
        />
      </ImageBackground>
    );
  }
}

export default MainPage;