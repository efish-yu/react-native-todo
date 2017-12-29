import styles from './application/styles/styles';
import ToDoListContainer from './application/components/ToDoListContainer';
import BasicConcept from './application/components/BasicConcept';
import React from 'react';
import {
  NavigatorIOS
} from 'react-native';

class ToDoApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                //ToDoContainer  -- ToApp的组件（页面）
                initialRoute={{component: ToDoListContainer, title: 'TO DOs'}}/>
                //BasicConcept -- 练习props, state, style的组件（页面）
                //initialRoute={{component: BasicConcept, title: '熟悉3个概念'}}/>
        );
    }
}

export default ToDoApp;
