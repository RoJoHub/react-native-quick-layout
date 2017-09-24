/**
 * 下午3:55
 * 2017年9月22日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TLayout from './Layout/TLayout';
import ILayout from './Layout/ILayout';

const istyle = StyleSheet.create({
  IContainer: {
    flex: 0.5,
    backgroundColor: 'yellow',
    width: 300,
  },
  sub1: {
    backgroundColor: 'red',
    flex: 1,
  },
  sub2: {
    backgroundColor: 'green',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 18
  },
});

const tstyle = StyleSheet.create({
  TContainer: {
    flex: 0.5,
    backgroundColor: 'yellow',
    width: 300,
  },
  mid: { backgroundColor: 'gray', flex: 1 },
  sub1: {
    backgroundColor: 'red',
    flex: 1,
  },
  sub2: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  sub3: {
    backgroundColor: 'green',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 18
  },
});

export default class LayoutExample extends Component {
  render() {
    const isT = false

    const iLayout = (
      <ILayout
        isLay={false}
        containerStyle={istyle.IContainer}
        sub1Style={istyle.sub1}
        sub2Style={istyle.sub2}
        renderSub1={<Text style={istyle.text}>试试改变"isLay"的值</Text>}
        renderSub2={<Text style={istyle.text}>我是renderSub2中的内容</Text>}
      />
    )

    const tLayout = (
      <TLayout
        position={TLayout.Position.bottom}
        containerStyle={tstyle.TContainer}
        renderSub1={<View><Text>11111</Text></View>}
        
        renderSub2={<View><Text>22222</Text></View>}
        renderSub3={<View><Text>33333</Text></View>}
        sub1Style={tstyle.sub1}
        sub2Style={tstyle.sub2}
        sub1And2ContainerStyle={tstyle.mid}
        sud3ContainerStyle={tstyle.sub3}
      />
    );

    const view = isT ? tLayout : iLayout;
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        {view}
      </View>
    );
  }
}

AppRegistry.registerComponent('LayoutExample', () => LayoutExample);
