import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const customId1 = "customId1";
    const customId2 = "customId2";

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        // post username and password
        try {
            axios.post('http://localhost:4000/api/auth/login', {
                username: username,
                password: password
            }).then(response => {
                setLoading(false);
                localStorage.setItem('userData', JSON.stringify({ token: response.data.Token, userId: response.data.userId, name: response.data.Name, username: response.data.username }));
                toast.success('Login Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    toastId: customId1
                });
                window.location = '/';
            }).catch(error => {
                // handle error
                setLoading(false);
                toast.error(error.response.data.Error, {
                    position: toast.POSITION.TOP_RIGHT,
                    toastId: customId2
                });
                console.log(error.response.data.Error);
            });
        } catch (error) {
            setLoading(false);
            toast.error('Please Login Again!', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error);
        }
    };

    if (localStorage.getItem('userData')) {
        window.location = '/';
    };

    return (
        <div className='cardBody'>
            <ToastContainer />
            <div className="card mb-3 mx-auto rounded-3" style={{ maxWidth: "740px" }}>
                <div className="row g-0">
                    <div className="col-md-5 login-image text-center rounded-start" style={{ backgroundColor: "#5dabfc" }}>
                        <p className="fs-4 fw-bold">Welcome Back</p>
                        <i className="fa-regular fa-comments" style={{ color: "#ffffff", fontSize: "54px" }}></i>
                    </div>
                    <div className="col-md-7 py-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bold fs-3">Log in</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                <button type="button" value="submit" onClick={handleSubmit} className="btn btn-dark mb-2" disabled={loading}>
                                    {loading ? 'Loading...' : 'Login'}
                                </button>

                                <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;