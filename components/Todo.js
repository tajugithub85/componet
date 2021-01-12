import React from 'react';

class Todo extends React.Component {


	render() {
		
		return (
			<div>
				<ul>
					<li> Question:{this.props.Question}</li>
					 <br/>
					<li>Answer:{this.props.Answer}</li>
			    </ul>
			</div>
		) 
	}
}

export default Todo;
