import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [addProfile, { error, data}] = useMutation(ADD_PROFILE);

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
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-two">
                        {data ? (
                            <p>Logged in successfully!</p>
                        ): (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                className="form"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                />
                                <input
                                className="form"
                                placeholder="*****"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                                />
                                <button
                                className="button btn-block btn-info"
                                style={{ cursor: 'pointer'}}
                                type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                        {error && (
                            <div className="error p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;