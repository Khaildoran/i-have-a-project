import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import mapStoreToProps from '../../redux/mapStoreToProps';

class AddSkills extends Component {
	state = {

	};

	render() {
		return (
			<>
			</>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(AddSkills));