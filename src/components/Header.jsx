import "./header.css";
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div
            className="header"
            id="header">
            <div
                className="headerdiv"
                id="headerdiv">
                <div
                    className="left"
                    id="left">
                    <div
                        className="logo"
                        id="logo">
                        <Link to="/">
                            <span style={{ color: "black" }}>Medi</span>
                            <span style={{ color: "#C42121" }}>Go</span>
                        </Link>
                    </div>
                    <div
                        className="tabs"
                        id="tabs">
                        <span
                            className="tab dim"
                            id="tab">
                            Contact
                        </span>
                        <span
                            className="tab dim"
                            id="tab">
                            About
                        </span>
                        <div
                            className="pricing"
                            id="pricing">
                            <span
                                className="tab gradient"
                                id="tab">
                                Pricing
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="right"
                    id="right">
                    <div id="headerAuthDiv">
                        <Link
                            to="/Signin">
                            <button
                                className="signin"
                                id="signin">
                                Sign in
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/Signup">
                            <button
                                className="signup"
                                id="signup">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};