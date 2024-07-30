import "./page2.css";

export default function Page2() {
    return (
        <div id="page2Component">
            <div
                className="page2"
                id="page2">
                <div
                    className="glassdiv"
                    id="glassdiv">
                    <div
                        style={
                            {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%"
                            }}>
                        <div
                            className="text_wrapper"
                            id="text_wrapper">
                            <p>
                                <span>
                                    Supported by
                                </span>
                                <span
                                    style={
                                        { color: "#b5fa98" }
                                    }>
                                    2000+
                                </span>
                                <span>
                                    Doctors
                                </span>
                                <span
                                    style={
                                        { color: "#ff8383" }
                                    }>
                                    200+
                                </span>
                                <span>
                                    Hospitals in
                                </span>
                                <span
                                    style={{ color: "#ffe0a7" }
                                    }>
                                    India
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg element1" id="bg">

                </div>
                <div className="bg element2" id="bg">

                </div>
                <div className="bg element3" id="bg">

                </div>
                <div className="bg element4" id="bg">

                </div>
            </div>
        </div>
    );
};