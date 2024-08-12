import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import { FragmentProps } from '../../types/Fragment';

export function Card({ item, goToEmployeeDetail }: FragmentProps) {
  return (
    <TouchableOpacity style={styles.employeeItem} onPress={goToEmployeeDetail}>
      <View style={styles.employeeInfo}>
        <Text style={styles.employeeName}>
          {item.firstname} {item.lastname}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
}
