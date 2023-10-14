import React from 'react'

const Content = props => {
	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla corporis porro rem error voluptatibus, aperiam praesentium voluptatem quo tempore rerum adipisci deserunt minima quibusdam inventore tempora necessitatibus omnis nemo a natus voluptate animi odio quidem officiis! Animi eligendi dolore aspernatur odio distinctio inventore necessitatibus placeat. Optio placeat officiis quas.'

	return (
		<div className={props.view ? 'viewcontent' : 'noviewcontent'}>
			<p className='textcontent'>{text}</p>
		</div>
	)
}

export default Content
