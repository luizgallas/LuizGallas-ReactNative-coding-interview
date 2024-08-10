import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenParamsList } from '../../navigators/paramsList';
import { IEmployee } from '../../types/employee';
import styles from './styles';

type EmployeesStackProp = StackNavigationProp<ScreenParamsList, 'Employees'>;

interface Props {
  item: IEmployee;
}

export const Employee = (props: Props) => {
  const { item } = props;
  const { navigate } = useNavigation<EmployeesStackProp>();

  const goToEmployeeDetail = () => {
    navigate('EmployeeDetail', { employee: item });
  };

  return (
    <TouchableOpacity style={styles.employeeItem} onPress={goToEmployeeDetail}>
      <View style={styles.employeeInfo}>
        <Text>
          {item.firstname} {item.lastname}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
};
