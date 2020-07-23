import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

 

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'test1'},
    {id: 2, title: 'test2'},
    {id: 3, title: 'test3'},
    {id: 4, title: 'test4'},
    {id: 5, title: 'test5'},
  ]);

	const addTodo = (title) => {

		setTodos( prev => [
			...prev, {
				id: Date.now().toString(),
				title
			}
		])
	}

	removeTodo = id => {
		setTodos( prev => prev.filter(todo => todo.id !== id))
	}

  return (
    <View>
		<Navbar title="Todo App"/>
		<View style={styles.container}>
			<AddTodo onSubmit={addTodo}/>

			<FlatList
				keyExtractor={item => item.id.toString()}
				data={todos}
				renderItem={({item}) => (
					<Todo todo={item} onRemove={removeTodo}/>
				)}
			/>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	},
});
