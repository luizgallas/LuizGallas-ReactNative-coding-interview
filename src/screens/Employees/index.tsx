import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { LoadingIndicator, SafeAreaView } from '../../components';
import { Employee } from '../../components/Employee';
import { useListPersons } from '../../hooks/persons';
import { IEmployee } from '../../types/employee';
import { Separator } from '../../components/Separator';

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
        keyExtractor={item => item.email}
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
        onEndReachedThreshold={1}
        onEndReached={() => !isFetchingNextPage && fetchNextPage()}
        ListFooterComponent={
          isLoading || isFetchingNextPage ? <LoadingIndicator /> : <></>
        }
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
}
