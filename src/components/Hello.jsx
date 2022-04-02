import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types'; // prop-types を読み込む

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{`Hello ${children}${bang ? '!' : ''}`}</Text>
    </View>
  );
}

// 型の定義
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// 初期値の定義
Hello.defaultProps = {
  bang: false,
  style: null,
};

// スタイルの定義
const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: '#0000ff',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
export default Hello;
