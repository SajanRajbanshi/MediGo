import "./page1.css";
import earphone from "./assets/earphone.png";

export default function Page1() {
    return (
        <div>
            <div
                className="page1"
                id="page1">
                <div>
                    <div
                        className="slogan"
                        id="slogan">
                        <span>
                            Your
                        </span>
                        <span
                            className="sloganblue"
                            id="sloganblue">
                            Health
                        </span>
                        <br />
                        <span>
                            Our
                        </span>
                        <span
                            className="slogangreen"
                            id="slogangreen">
                            Goal
                        </span>
                    </div>
                    <div
                        className="bio"
                        id="bio">
                        <span>
                            Make your life easy<br />
                            with this one step toward<br />
                            Quality medical service. Now is the time.
                        </span>
                    </div>
                    <div
                        className="btn_Join_Us"
                        id="btn_Join_Us">
                        <a
                            href="https://sajanrajbanshi.github.io/Medigo_signin/">
                            <button
                                className="Join_Us"
                                id="Join_Us">
                                Join Us
                            </button>
                        </a>
                    </div>
                </div>
                <img
                    src={earphone}
                    alt="earphone"
                    className="earphone1"
                    id="earphone1" />
                <img
                    src={earphone}
                    alt="earphone"
                    className="earphone2"
                    id="earphone2" />
            </div>
        </div>
    );
};