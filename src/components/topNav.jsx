import React from 'react';

class TopNav extends React.Component {
	render() {
		return (
			<div className='topnav'>
				<div className='topnav-left'>
					<a href='#home'>Home</a>
					<a href='#news'>News</a>
					<a href='#contact'>Contact</a>
					<a href='#about'>About</a>
					<a href='#buy'>Buy</a>
				</div>
			</div>
		);
	}
}

export default TopNav;
