import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { ScreenParamsList } from '../../navigators/paramsList';
import { IEmployee } from '../../types/employee';
import { List } from './fragments/List/List';
import { Card } from './fragments/Card/Card';

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

  return Platform.OS === 'ios' ? (
    <List item={item} goToEmployeeDetail={goToEmployeeDetail} />
  ) : (
    <Card item={item} goToEmployeeDetail={goToEmployeeDetail} />
  );
};
