import React, { useState } from 'react';
import FormValidated from './FormValidated';
import SignUp from './SignUp';
const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<div>
			<SignUp />
			{!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormValidated />}
		</div>
	);
};

export default Form;
