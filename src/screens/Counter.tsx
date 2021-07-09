import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../duck/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../duck/counter/counterSlice';
import styles from './styles';
import Button from '../components/button/button';
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>EFFECTUS</Text>
      <Text style={styles.subtitleText}>Redux-toolkit</Text>
      <Text style={styles.counterText}>Counter:{count}</Text>
      <View style={styles.buttonContainer}>
        <Button name="Increase" action={increment} />
        <Button
          name="Increase by 10"
          action={incrementByAmount}
          valueOfAction={10}
        />
        <Button name="Decrease" action={decrement} />
      </View>
    </View>
  );
};

export default Counter;
