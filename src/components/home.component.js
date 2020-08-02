import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
	state = {};

	componentDidMount(){
	//const config = {
	//		headers: {
	//			Authorization: 'Bearer ' + localStorage.getItem('token')
	//		}
	//	};                
	//	not good practice as may use more apis*/

	//	axios.get('http://localhost:8000/user', config).then(
			axios.get('user').then(
			res => {
				console.log(res);
				this.setState({
					user: res.data  //set to user state
				});
			},
			err => {
				console.log(err)
			}
		)
	} //runs before render

	render(){
		if(this.state.user){
			return (
				<h2>Hi {this.state.user.first_name}</h2>
			)
	}
		return(
			<h2>You are not logged in</h2>
		)
	}
}