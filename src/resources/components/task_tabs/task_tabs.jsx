import React from 'react';

import {Link} from 'react-router-dom';

export const TaskTabs = () => {
	return(
		<>
			<Link to={'/'}>Active</Link>
			<Link to={'/completed'}>Completed</Link>
		</>
	)
}