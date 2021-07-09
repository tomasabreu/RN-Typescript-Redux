import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';

const Button = ({
  name,
  action,
  valueOfAction,
}: {
  name: string;
  action:
    | ActionCreatorWithPayload<number, string>
    | ActionCreatorWithoutPayload<string>;
  valueOfAction?: number;
}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => dispatch(action(valueOfAction as number))}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
