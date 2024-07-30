import "./footer.css";

export default function Footer() {
    return (
        <div
            className="footer"
            id="footer">
            <div
                className="glassdiv2"
                id="glassdiv2">
                <div
                    className="logo"
                    id="logo">
                    <a
                        href="https://sajanrajbanshi.github.io/Landing/">
                        <span style={{ color: "black" }}>Medi</span>
                        <span style={{ color: "#C42121" }}>Go</span>
                    </a>
                </div>
                <div
                    style={
                        {
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                    <div
                        className="slogan"
                        id="slogan"
                        style={
                            {
                                fontSize: "2vw",
                                color: "#aaaaaa",
                                width: "fit-content"
                            }
                        }>
                        Your Health our Goal
                    </div>
                    <div
                        className="tabs" i
                        d="tabs">
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
                <hr
                    color="#aaaaaa"
                    style={
                        {
                            marginTop: "3vw",
                            marginBottom: "3vw",
                            height: "1px",
                            border: "none"
                        }
                    } />
                <div
                    style={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#767676",
                        fontSize: "1vw",
                        fontWeight: "500"
                    }
                    }>
                    <div id="lawsRules">
                        All Right Reserved 2024
                    </div>
                    <div id="lawsRules">
                        Terms and Contditions
                    </div>
                    <div id="lawsRules">
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    );
};