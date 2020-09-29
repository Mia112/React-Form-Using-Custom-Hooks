export default function Validation(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = 'Username required';
	}

	if (!values.email) {
		errors.email = 'Email is required';
	} else if (
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			values.email
		)
	) {
		errors.email = 'You entered an invalid email address';
	}
	if (!values.password) {
		errors.password = 'Password is requried';
	} else if (values.password.length < 6) {
		errors.passwoed = 'Password needs to be 6 characters or more';
	}

	if (!values.password2) {
		errors.password2 = 'Password is required';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords do not match';
	}

	return errors;
}
