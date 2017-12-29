'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
//import styles from '../styles/styles'

// practice state
class Blink extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { showText: true };
		// 每1000毫秒对showText状态做一次取反操作
		setInterval(() => {
			this.setState({ showText: !this.state.showText });
		}, 1000);
  	}
  	render() {
		// 根据当前showText的值决定是否显示text内容
		let display = this.state.showText ? this.props.text : ' ';
		return (
			<View>
		  		<Text>{display}</Text>
		  	</View>
		);
  	}
}

// practice props
class Greeting extends React.Component {
	constructor() {
		super();
  	}

  	render() {
		return (
			<View>
	  			<Text>Hello {this.props.name} </Text>
	  		</View>
		);
  	}
}


// practice style
const myStyles = StyleSheet.create({
  	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
  	},
  	red: {
		color: 'red',
  	},
});

class BasicConcept extends React.Component {
	constructor() {
        super();
    }

	render() {
		return (
		  	<View style={{flex:1}}>
		  		<Text> {"\n\n\n\n"} </Text>
		  		<Greeting name='Rexxar' />
				<Greeting name='Jaina' />
				<Greeting name='Valeera' />

				<Text> {"\n"} </Text>
				<Blink text='I love to blink' />
				<Blink text='Yes blinking is so great' />
				<Blink text='Why did they ever take this out of HTML' />
				<Blink text='Look at me look at me look at me' />
				
				<Text> {"\n"} </Text>
				<Text style={myStyles.red}>just red</Text>
				<Text style={myStyles.bigblue}>just bigblue</Text>
				<Text style={[myStyles.bigblue, myStyles.red]}>bigblue, then red</Text>
				<Text style={[myStyles.red, myStyles.bigblue]}>red, then bigblue</Text>
				<Text style={{color:'red' , fontSize:30}}>
					非著名
	  				<Text style={{color:'blue'}}>
		  				程序员
	  				</Text>
				</Text>
		  	</View>
		);
  	}
}

module.exports = BasicConcept;