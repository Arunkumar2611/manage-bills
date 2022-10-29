import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

const User = (props) => {
	useEffect(() => {
		const { dispatch } = props;
    	dispatch(fetchData());
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

const mapStateToProps = (state) => {
    const { volcano } = state;
    console.log(volcano)
    return {
        loading: volcano.loading,
        items: volcano.data,
        error: volcano.error
    };
};

export default connect(mapStateToProps)(User);
