import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
const Login = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [login, { error, data}] = useMutation(LOGIN);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // form that submits
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className="container my-1">
        <Link to="/signup">← Go to Signup</Link>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
            <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
            />
            </div>
            <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
            />
            </div>
            {error ? (
            <div>
                <p className="error-text">The provided credentials are incorrect</p>
            </div>
            ) : null}
            <div className="flex-row flex-end">
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    );
    }
export default Login;