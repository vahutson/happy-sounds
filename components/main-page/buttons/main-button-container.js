import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Sound from 'react-native-sound';
import MainButton from './main-button';

const correctSource = require('./../../../assets/image/correct.png');
const wrongSource = require('./../../../assets/image/wrong.png');

const correctSound = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const wrongSound = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

class MainButtonContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { borderRadius, mainButtonSize } = this.props;
    return (
      <View
        style={{ paddingBottom: 40 }}
      >
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          style={{ alignSelf: 'flex-end', marginRight: 20  }}
          onPress={() => {
            correctSound.stop();
            correctSound.play();
          }}
          source={correctSource}
        />
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          style={{ alignSelf: 'center' }}
          onPress={() => {
            wrongSound.stop();
            wrongSound.play();
          }}
          source={wrongSource}
        />
      </View>
    );
  }
}

export default MainButtonContainer;