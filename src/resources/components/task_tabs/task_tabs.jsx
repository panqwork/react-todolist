import React from 'react';

import s from './style.module.scss'

import {Link, withRouter} from 'react-router-dom';

const TaskTabsComponent = (props) => {
	let activeTab = (props.location.pathname).substring(1) || 'all';
	return(
		<div className={[s.tabs, s[activeTab]].join(' ')}>
			<Link to={'/'}>All</Link>
			<Link to={'/active'}>Active</Link>
			<Link to={'/completed'}>Completed</Link>
		</div>
	)
}

export const TaskTabs = withRouter(TaskTabsComponent)