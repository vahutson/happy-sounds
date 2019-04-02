import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';

class MainButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { borderRadius, width, height, style, onPress } = this.props;
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
              borderWidth: 2,
              borderColor: '#ffffff',
            }]}
        >

        </View>
      </TouchableOpacity>
    );
  }
}

export default MainButton;