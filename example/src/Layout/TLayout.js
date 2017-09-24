import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ILayout from './ILayout';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  mid: {
    alignItems: 'stretch',
  },
  sub3: {
    alignItems: 'stretch',
  },
});

const Position = {
  top: 1,
  left: 2,
  bottom: 3,
  right: 4,
};

class TLayout extends PureComponent {
  static propTypes = {
    position: PropTypes.number,

    containerStyle: View.propTypes.style,
    sub1And2ContainerStyle: View.propTypes.style,
    sub1Style: View.propTypes.style,
    sub2Style: View.propTypes.style,
    sud3ContainerStyle: View.propTypes.style,

    renderSub1: PropTypes.node,
    renderSub2: PropTypes.node,
    renderSub3: PropTypes.node,
  }


  static defaultProps = {
    position: Position.top,
    containerStyle: styles.container,
    sub1And2ContainerStyle: null,
    sub1Style: null,
    sub2Style: null,
    sud3ContainerStyle: null,

    renderSub1: null,
    renderSub2: null,
    renderSub3: null,
  }

  render() {
    const {
      position,
      containerStyle,

      sub1Style,
      sub2Style,
      sud3ContainerStyle,
      sub1And2ContainerStyle,

      renderSub1,
      renderSub2,
      renderSub3,
    } = this.props;

    const containerOrientationStyle = { flexDirection: 'column' };
    const midViewOrientationStyle = { flexDirection: 'row' };
    let isLay = false;
    switch (position) {
      case Position.top:
        /**
         * default
         */
        break;
      case Position.left:
        containerOrientationStyle.flexDirection = 'row';
        midViewOrientationStyle.flexDirection = 'column';
        isLay = true;
        break;
      case Position.bottom:
        containerOrientationStyle.flexDirection = 'column-reverse';
        midViewOrientationStyle.flexDirection = 'row';
        isLay = false;
        break;
      case Position.right:
        containerOrientationStyle.flexDirection = 'row-reverse';
        midViewOrientationStyle.flexDirection = 'column';
        isLay = true;
        break;
      default:
        /**
         * default
         */
        break;
    }
    return (
      <View style={[styles.container, containerStyle, containerOrientationStyle]} >
        <ILayout
          isLay={isLay}
          containerStyle={[sub1And2ContainerStyle, midViewOrientationStyle]}
          sub1Style={sub1Style}
          sub2Style={sub2Style}
          renderSub1={renderSub1}
          renderSub2={renderSub2}
        />
        <View style={[sud3ContainerStyle, styles.sub3]}>{renderSub3}</View>
      </View>
    );
  }
}

TLayout.Position = Position;

export default TLayout;

