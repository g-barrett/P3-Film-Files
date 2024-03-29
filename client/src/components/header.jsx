import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import background from "../assets/images/MRlogo.png";


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
            <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
                <div className="text-dark" to="/">
                    
                    <h1 className="m-0" style={{ fontSize: '10rem' }}>
                        Film Files
                    </h1>
                    <h2>
                        Quality Movies, Quality Reviews
                    </h2>
                </div>
                    <div>
                        {Auth.loggedIn() ? (
                            <>
                                <Link className="btn btn-lg btn-primary m-2" to="/movie">
                                    Movies
                                </Link>
                                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                    Logout
                                </button>
                            </>
                            
                        ) : (
                            <>
                                {/* <Link className="btn btn-lg btn-primary m-2" to="/login">
                                    Login
                                </Link>
                                <Link className="btn btn-lg btn-light m-2" to="/signup">
                                    Signup
                                </Link> */}
                            </>
                        )}
                    </div>
            </div>
            </header>
    );
};

export default Header;