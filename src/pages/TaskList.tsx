/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useQuery, } from 'react-query'
import { useGetTodos } from '../hooks/todos';

type SectionProps = PropsWithChildren<{
  //   title: string;
}>;
interface Todos {
  todo: string
}

function TaskList(): JSX.Element {
  const { data, isLoading } = useGetTodos();
  console.log(data?.todos[0]);

  return (
    <View>
      <Text>Task List</Text>

      {data?.todos?.map((dat: Todos, i: number) => {
        return (
          <View key={i}>
            <Text>{dat.todo}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TaskList;
