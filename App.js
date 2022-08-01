import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

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
    const [showAddTask, setShowAddTask] = useState(false);
    const [addTaskNewName, setAddTaskNewName] = useState('');

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
                            setShowAddTask(true);
                        }}
                    >
                        <Text style={styles.text}>Add Task</Text>
                    </Pressable>

                    {tasks.map((task) => (
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
                                            setAddTaskNewName('');
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

            {showAddTask && (
                <View style={styles.addTask_container}>
                    <Pressable
                        style={styles.addTask_exit}
                        onPress={() => {
                            setShowAddTask(false);
                        }}
                    >
                        <Text style={styles.addTask_exit_text}>❌</Text>
                    </Pressable>
                    <View style={styles.addTask_header}>
                        <Text style={styles.addTask_header_title}>
                            Add Task
                        </Text>
                        <Text style={styles.addTask_header_caption}>
                            Add task here
                        </Text>
                    </View>
                    <View style={styles.addTask_body}>
                        <TextInput
                            style={styles.addTask_body_taskName}
                            onChangeText={(e) => {
                                setAddTaskNewName(e);
                            }}
                            value={addTaskNewName}
                            placeholder="Task name"
                        />
                        <Pressable
                            style={styles.addTask_body_submit}
                            onPress={() => {
                                setTasks([
                                    ...tasks,
                                    {
                                        id: tasks.length + 1,
                                        title: addTaskNewName,
                                        completed: false,
                                    },
                                ]);
                                setAddTaskNewName('');
                                setShowAddTask(false);
                            }}
                        >
                            <Text style={styles.addTask_body_submitText}>
                                Finish
                            </Text>
                        </Pressable>
                    </View>
                </View>
            )}
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
        height: 50,
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
        maxHeight: '95%',
        overflow: 'scroll',
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
        height: 50,
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

    addTask_container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
    },
    addTask_exit: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        height: '5%',
        marginLeft: '90%',
    },
    addTask_header: {
        // center
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTask_header_title: {
        fontSize: 20,
        color: 'rgb(220, 220, 220)',
        fontWeight: 'bold',
    },
    addTask_body: {
        width: '100%',
        // center
        height: '15%',
        alignItems: 'center',
        padding: '5%',
    },
    addTask_header_caption: {
        fontSize: 12,
        color: 'rgb(220, 220, 220)',
    },
    addTask_body_taskName: {
        borderRadius: 5,
        backgroundColor: 'rgb(240, 240, 240)',
        width: '100%',
        padding: 4,
    },
    addTask_body_submit: {
        borderRadius: 5,
        backgroundColor: 'rgb(240, 240, 240)',
        width: '60%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
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
