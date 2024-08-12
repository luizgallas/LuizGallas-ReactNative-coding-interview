import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EmployeeDetailScreen, EmployeesScreen } from '../screens';
import { ScreenParamsList } from './paramsList';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator<ScreenParamsList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#6C3ECD',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen component={EmployeesScreen} name="Employees" />
      <Stack.Screen component={EmployeeDetailScreen} name="EmployeeDetail" />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator<ScreenParamsList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={EmployeesScreen} name="Employees" />
      <Drawer.Screen component={EmployeeDetailScreen} name="EmployeeDetail" />
    </Drawer.Navigator>
  );
}
