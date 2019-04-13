import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Sound from 'react-native-sound';
import MainButton from './main-button';

const snareSource = require('./../../../assets/image/snare.png');
const milionareSource = require('./../../../assets/image/millionare.png');
const ouSource = require('./../../../assets/image/ou-my.jpg');
const eralashSoure = require('./../../../assets/image/eralash.png');

const eralashSound = new Sound('eralash.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const jokeSound = new Sound('joke.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const millionareSound = new Sound('millionaire.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const ohMySound = new Sound('ohmy.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const trumpetSound = new Sound('trumpet.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const sadSound = new Sound('sad.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const lohPidrSound = new Sound('lohpidr.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const dunDunDunSound = new Sound('dundundun.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const okurwaSound = new Sound('okurwa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

class SecondaryButtonContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getButtonSound = (containerIndex, buttonIndex ) => {
    if (containerIndex === 1) {
      if (buttonIndex === 1) {
        return jokeSound;
      } else if (buttonIndex === 2) {
        return millionareSound;
      } else if (buttonIndex === 3) {
        return ohMySound;
      }
      return eralashSound;
    }
    if (containerIndex === 2 ) {
      if (buttonIndex === 1) {
        return trumpetSound;
      } else if (buttonIndex === 2) {
        return sadSound;
      } else if (buttonIndex === 3) {
        return lohPidrSound;
      }
      return dunDunDunSound;
    }
    if (containerIndex === 3) {
      if (buttonIndex === 3) {
        return okurwaSound;
      }
    }
  };

  onPress = (containerIndex, buttonIndex) => {
    const sound = this.getButtonSound(containerIndex, buttonIndex);
    sound.stop();
    sound.play();
  };

  render() {
    const { borderRadius, mainButtonSize, index }  = this.props;
    return (
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-around'}}
      >
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          onPress={() => this.onPress(index, 1)}
          source={snareSource}
          snare
        />
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          onPress={() => this.onPress(index, 2)}
          source={milionareSource}
          millionare
        />
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          onPress={() => this.onPress(index, 3)}
          source={ouSource}
          ou
        />
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          onPress={() => this.onPress(index, 4)}
          source={eralashSoure}
          eralash
        />
      </View>
    );
  }
}

export default SecondaryButtonContainer;