import React, { useState } from "react";


const data = [{
    q: "Q. How does the online consultancy service work? Are the healthcare professionals qualified and licensed?",
    a: "Medigo's online consultancy service allows users to connect with qualified and licensed healthcare professionals through video calls, chat, or phone consultations. These professionals include doctors, specialists, and medical practitioners who are rigorously vetted to ensure expertise and credentials."
},
{
    q: "Q. What types of medical issues or concerns can I address through the online consultancy feature?",
    a: "Users can address a wide range of medical issues and concerns through Medigo's online consultancy service, including minor illnesses, medication queries, chronic conditions management, mental health support, and general health advice."
},
{
    q: "Q. Can I schedule appointments with specific doctors or specialists through Medigo?",
    a: "Yes, Medigo allows users to schedule appointments with specific doctors or specialists based on availability and user preferences. This feature ensures continuity of care and allows users to consult with healthcare professionals they trust."
},
{
    q: "Q. How secure is the platform in terms of protecting my personal and medical information?",
    a: "Medigo takes data security and privacy seriously. The platform employs advanced encryption protocols and adheres to strict privacy regulations to safeguard users' personal and medical information. All data transmission and storage are conducted in compliance with industry standards."
},
{
    q: "Q. Are there any limitations on the types of medications I can order through Medigo?",
    a: "Medigo offers a wide range of medications, including prescription and over-the-counter drugs, to meet various healthcare needs. However, certain controlled substances or medications requiring special authorization may have restrictions based on local regulations."
}];

export default function Accordian() {

    const [active, setActive] = useState(null)

    function update(index) {
        setActive(index)
    }
    return (
        <div id="accordian_faq_question_component">
            {data.map((d, index) => {
                <div id="accordian_faq_question_container">
                    <button
                        className="faq_question"
                        id="faq_question"
                        onClick={() => { update(index) }}>
                        {d.q}
                    </button>
                    <div
                        className={active === index ? "show" : "hide"}
                        id="accordian_content_box">
                        <p>
                            {d.a}
                        </p>
                    </div>
                </div>
            })}
        </div>
    )
}