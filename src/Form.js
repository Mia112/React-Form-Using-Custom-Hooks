import React, { useState } from 'react';
import FormValidated from './FormValidated';
import SignUp from './SignUp';
import './Form.css';
const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className='form-container'>
				<span className='close-btn'>x</span>
				<div className='form-content-left'>
					<img src='img/CL1.PNG' alt='plan' className='form-img' />
				</div>
				{!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormValidated />}
			</div>
		</>
	);
};

export default Form;
