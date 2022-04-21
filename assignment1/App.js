/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView, 
  View, 
  Button, 
  StyleSheet,
  Text,
} from 'react-native';

const App: () => Node = () => {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isStarted) {
      const intervalId = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);

      setIntervalId(intervalId);
      
      return () => {
        clearInterval(intervalId);
      }
    } else {
      clearInterval(intervalId);
    }
  }, [isStarted]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.textWrapper}> 
        <Text style={styles.text}>Counter</Text>
        <Text style={styles.text}>
          {count}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button onPress={() => setIsStarted(true)} title='START'></Button>
        <Button onPress={() => setIsStarted(false)} title='STOP'></Button>
        <Button onPress={() => {
          setCount(0)
          setIsStarted(false)
        }} title='RESET'></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
};

export default App;
