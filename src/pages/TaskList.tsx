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

function TaskList(): JSX.Element {
  const { data: { todos }, isLoading } = useGetTodos();
  console.log(todos);

  return (
    <View>
      {todos.map((dat) => {
        <Text>{dat}</Text>
      })}
      <Text>Task List</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TaskList;
