import React from 'react'

const Content = props => {
	return (
		<div className={props.view ? 'viewcontent' : 'noviewcontent'}>
			<p className='textcontent'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis optio et laboriosam minima nulla iusto
				deleniti voluptatem. Molestiae, voluptates! Labore, facilis sequi accusantium dolorum illum porro, quos iure
				odit ipsam repellendus exercitationem enim aspernatur, at fugiat? Excepturi, voluptatem labore.
			</p>
		</div>
	)
}

export default Content
