import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Field, SafeAreaView } from '../../components';
import { ScreenParamsList } from '../../navigators/paramsList';

type EmployeeDetailStack = StackNavigationProp<
  ScreenParamsList,
  'EmployeeDetail'
>;
type EmployeeDetailRoute = RouteProp<ScreenParamsList, 'EmployeeDetail'>;

export function EmployeeDetailScreen() {
  const { setOptions } = useNavigation<EmployeeDetailStack>();
  const {
    params: { employee },
  } = useRoute<EmployeeDetailRoute>();

  useEffect(() => {
    setOptions({
      title: 'Employee Detail',
    });
  }, [setOptions]);

  return (
    <SafeAreaView>
      <Field
        label="Name"
        value={`${employee.firstname} ${employee.lastname}`}
      />
      <Field label="Email" value={employee.email} />
      <Field label="Site" value={employee.website} />
      <Field label="Phone" value={employee.phone} />
    </SafeAreaView>
  );
}
