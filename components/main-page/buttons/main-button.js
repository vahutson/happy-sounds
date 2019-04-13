import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

class MainButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {
      borderRadius,
      width,
      height,
      style,
      onPress,
      source,
    millionare,
      ou,
      eralash,
      snare,
    } = this.props;
    const size  = () => {
      if (millionare || ou || eralash ) {
        return '100%';
      } else if (snare) {
        return '90%';
      }
      return '50%';
    };
    return(
      <TouchableOpacity
        onPress={onPress}
      >
        <View
          style={[
            style,
            {
              borderRadius,
              width,
              height,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 0.5,
              borderColor: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }]}
        >
          <Image
            resizeMode={!ou ? 'contain' : 'cover'}
          source={source}
          style={
            [
              {
                width: size(),
                height: size(),
              },
            ]
          }
          />

        </View>
      </TouchableOpacity>
    );
  }
}

export default MainButton;