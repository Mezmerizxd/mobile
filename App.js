import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

const TaskCollection = [
    {
        id: 1,
        title: 'Sleep',
        completed: false,
    },
    {
        id: 2,
        title: 'Code',
        completed: false,
    },
];

export default function App() {
    const [tasks, setTasks] = useState(TaskCollection);

    return (
        <View style={styles.container}>
            <View style={styles.tasklist_container}>
                <View style={styles.tasklist_header}>
                    <Text style={styles.header_title}>Task list</Text>
                </View>
                <View style={styles.tasklist_body}>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            setTasks([
                                ...tasks,
                                {
                                    id: tasks.length + 1,
                                    title: 'New task',
                                    completed: false,
                                },
                            ]);
                        }}
                    >
                        <Text style={styles.text}>Add Task</Text>
                    </Pressable>

                    {TaskCollection.map((task) => (
                        <View key={task.id} style={styles.task_container}>
                            <View style={styles.task_data}>
                                <Text style={styles.task_title}>
                                    {task.title}
                                </Text>
                                <Text
                                    style={
                                        task.completed
                                            ? styles.task_completed
                                            : styles.task_notCompleted
                                    }
                                >
                                    {task.completed
                                        ? 'Completed'
                                        : 'Not Completed'}
                                </Text>
                            </View>
                            {task.completed === false && (
                                <View style={styles.task_action}>
                                    <Pressable
                                        style={styles.tickBox}
                                        onPress={() => {
                                            const newTasks = tasks.map((t) => {
                                                if (t.id === task.id) {
                                                    t.completed = true;
                                                }
                                                return t;
                                            });
                                            setTasks(newTasks);
                                        }}
                                    >
                                        <Text style={styles.box_text}>✅</Text>
                                    </Pressable>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1f24',
    },
    tasklist_container: {
        marginTop: 50,
        width: '90%',
        marginLeft: '5%',
    },

    tasklist_header: {
        borderRadius: 5,
        width: '100%',
        height: '5%',
        backgroundColor: '#455CA0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_title: {
        fontSize: 20,
        color: 'rgb(220, 220, 220)',
        fontWeight: 'bold',
    },

    tasklist_body: {
        height: '95%',
    },
    task_container: {
        borderRadius: 5,
        backgroundColor: 'rgb(240, 240, 240)',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '8%',
    },
    task_completed: {
        fontSize: 12,
        color: '#5EDF64',
        fontWeight: 'bold',
    },
    task_notCompleted: {
        fontSize: 12,
        color: '#DF5E5E',
        fontWeight: 'bold',
    },

    task_action: {
        // display row
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tickBox: {
        marginHorizontal: 5,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(240, 240, 240)',
        width: '60%',
        marginLeft: '20%',
        margin: 20,
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});
