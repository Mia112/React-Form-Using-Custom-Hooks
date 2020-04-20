import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Mia Jones',
			image:
				'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=compress&cs=tinysrgb&dpr=2&w=750&w=1260',
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
