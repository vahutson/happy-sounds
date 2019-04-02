import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Sound from 'react-native-sound';
import MainButton from './main-button';

const eralashSound = new Sound('eralash.mp3', Sound.MAIN_BUNDLE, (error) => {
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
          onPress={() => eralashSound.play()}
        />
        <MainButton
          width={mainButtonSize}
          height={mainButtonSize}
          borderRadius={borderRadius}
          style={{ alignSelf: 'center' }}
        />
      </View>
    );
  }
}

export default MainButtonContainer;