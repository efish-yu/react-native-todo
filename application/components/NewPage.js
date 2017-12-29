'use strict';
import styles from '../styles/styles';
import t  from 'tcomb-form-native';
import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
var Form = t.form.Form;

var ToDo = t.struct({txt: t.Str, 完成: t.Bool});

var options = {
    fields: {
        txt: {
            label: '任务项',
            placeholder: '请输入一个任务',
            autoFocus: true
        }
    }
};

class NewPage extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        if (value) {
            this.props.update(value, this.props.id);
        }
    }

    render() {
        return (
            <View style={styles.todo}>
                <Form
                    ref="form"
                    type={ToDo}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.item}/>
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={this.onUpdate}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>保存</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


export default NewPage;
