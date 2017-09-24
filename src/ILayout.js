import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const containerStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  subContainer: {
    alignItems: 'stretch',
  },
});

const detailStyle = StyleSheet.create({
  containerTopAndBottom: {
    flexDirection: 'column',
  },
  containerLeftAndRight: {
    flexDirection: 'row',
  },
});

const blankView = <View />;

class ILayout extends PureComponent {
  static propTypes = {
    isLay: PropTypes.bool,

    renderSub1: PropTypes.node,
    renderSub2: PropTypes.node,

    containerStyle: View.propTypes.style,
    sub1Style: View.propTypes.style,
    sub2Style: View.propTypes.style,
  }

  static defaultProps = {
    isLay: false,

    renderSub1: blankView,
    renderSub2: blankView,

    containerStyle: null,
    sub1Style: null,
    sub2Style: null,
  }

  render() {
    const {
      containerStyle,
      isLay,

      renderSub1,
      renderSub2,

      sub1Style,
      sub2Style,
    } = this.props;

    const orientationStyle = isLay ?
      detailStyle.containerTopAndBottom
      :
      detailStyle.containerLeftAndRight;

    return (
      <View style={[containerStyles.container, orientationStyle, containerStyle]} >
        <View style={[sub1Style, containerStyles.subContainer]}>
          {renderSub1}
        </View>
        <View style={[sub2Style, containerStyles.subContainer]}>
          {renderSub2}
        </View>
      </View>
    );
  }
}

export default ILayout;

