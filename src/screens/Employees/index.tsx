import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { LoadingIndicator, SafeAreaView } from '../../components';
import { Employee } from '../../components/Employee';
import { useListPersons } from '../../hooks/persons';
import { IEmployee } from '../../types/employee';

import styles from './styles';

export function EmployeesScreen() {
  const [list, setList] = useState<IEmployee[]>([]);
  const { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage } =
    useListPersons();

  useEffect(() => {
    if (data) {
      setList(data.pages.flatMap(d => d.data));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <SafeAreaView>
      <FlatList<IEmployee>
        refreshing={isLoading}
        onRefresh={refetch}
        data={list}
        renderItem={({ item }) => (
          <Employee
            item={{
              email: item.email,
              firstname: item.firstname,
              lastname: item.lastname,
              phone: item.phone,
              website: item.website,
            }}
          />
        )}
        onEndReachedThreshold={100}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={
          isLoading || isFetchingNextPage ? <LoadingIndicator /> : <></>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
