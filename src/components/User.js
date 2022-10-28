import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const User = (props) => {
	useEffect(() => {
		props.fetchUsers();
	}, []);

	return (
		<div>
			<ul>
				{props.users &&
					props.users.map(user => {
						return <li key={user.id}>{user.description}</li>;
					})}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

export default connect(
	mapStateToProps,
	{ fetchUsers }
)(User);
