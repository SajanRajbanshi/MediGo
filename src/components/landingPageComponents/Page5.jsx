import React, { useState } from "react";
import "./page5.css";

const data = [
  {
    q: "Q. How does the online consultancy service work? Are the healthcare professionals qualified and licensed?",
    a: "Medigo's online consultancy service allows users to connect with qualified and licensed healthcare professionals through video calls, chat, or phone consultations. These professionals include doctors, specialists, and medical practitioners who are rigorously vetted to ensure expertise and credentials.",
  },
  {
    q: "Q. What types of medical issues or concerns can I address through the online consultancy feature?",
    a: "Users can address a wide range of medical issues and concerns through Medigo's online consultancy service, including minor illnesses, medication queries, chronic conditions management, mental health support, and general health advice.",
  },
  {
    q: "Q. Can I schedule appointments with specific doctors or specialists through Medigo?",
    a: "Yes, Medigo allows users to schedule appointments with specific doctors or specialists based on availability and user preferences. This feature ensures continuity of care and allows users to consult with healthcare professionals they trust.",
  },
  {
    q: "Q. How secure is the platform in terms of protecting my personal and medical information?",
    a: "Medigo takes data security and privacy seriously. The platform employs advanced encryption protocols and adheres to strict privacy regulations to safeguard users' personal and medical information. All data transmission and storage are conducted in compliance with industry standards.",
  },
  {
    q: "Q. Are there any limitations on the types of medications I can order through Medigo?",
    a: "Medigo offers a wide range of medications, including prescription and over-the-counter drugs, to meet various healthcare needs. However, certain controlled substances or medications requiring special authorization may have restrictions based on local regulations.",
  },
];

export default function Page5() {
  const [active, setActive] = useState(null);

  function update(index) {
    setActive(index);
  }
  return (
    <div className="page5" id="page5">
      <div className="glassdiv_faq" id="glassdiv_faq">
        <div className="faq_container" id="faq_container">
          {data.map((d, index) => (
            <div key={index}>
              <button
                className="faq_question"
                id="faq_question"
                onClick={() => {
                  update(index);
                }}
              >
                {d.q}
              </button>
              <div
                id="accordian"
                className={active === index ? "show" : "hide"}
              >
                <p>{d.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Page5()
// {
//     const [selected,setSelected] = useState(0);
//     function show(indexToChange)
//     {
//         // if(selected===indexToChange)
//         // {
//         //     setSelected(null)
//         // }
//         setSelected(indexToChange);
//     }
//     return(
//         <div className="page5">
//             <div className="glassdiv_faq">
//                 <div className="faq_container">
//                     <div>
//                         <button className="faq_question" onClick={()=>{show(0)}}>
//                             <span>Q. How does the online consultancy service work? Are the healthcare professionals qualified and licensed?</span>
//                         </button>
//                         <div className={selected===0?"show":"hide"}>
//                             <p>Medigo's online consultancy service allows users to connect with qualified and licensed healthcare professionals
//                                 through video calls, chat, or phone consultations. These professionals include doctors, specialists, and medical
//                                 practitioners who are rigorously vetted to ensure expertise and credentials.</p>
//                         </div>
//                     </div>
//                     <hr style={{borderWidth: "0.5px", borderColor: "#767676", margin: "0 2vw"}}/>
//                     <div>
//                         <button className="faq_question" onClick={()=>{show(1)}}>
//                             Q. What types of medical issues or concerns can I address through the online consultancy feature?
//                         </button>
//                         <div className={selected===1?"show":"hide"} id="2">
//                             <p>Users can address a wide range of medical issues and concerns through Medigo's online consultancy service,
//                             including minor illnesses, medication queries, chronic conditions management, mental health support,
//                             and general health advice.</p>
//                         </div>
//                     </div>
//                     <hr style={{borderWidth: "0.5px", borderColor: "#767676", margin: "0 2vw"}}/>
//                     <div>
//                         <button className="faq_question" onClick={()=>{show(2)}}>
//                             Q. Can I schedule appointments with specific doctors or specialists through Medigo?
//                         </button>
//                         <div className={selected===2?"show":"hide"}>
//                             <p>Yes, Medigo allows users to schedule appointments with specific doctors or specialists
//                             based on availability and user preferences. This feature ensures continuity of care and allows
//                             users to consult with healthcare professionals they trust.</p>
//                         </div>
//                     </div>
//                     <hr style={{borderWidth: "0.5px", borderColor: "#767676", margin: "0 2vw"}}/>
//                     <div>
//                         <button className="faq_question" onClick={()=>{show(3)}}>
//                             Q. How secure is the platform in terms of protecting my personal and medical information?
//                         </button>
//                         <div className={selected===3?"show":"hide"}>
//                             <p>Medigo takes data security and privacy seriously. The platform employs advanced encryption
//                                 protocols and adheres to strict privacy regulations to safeguard users' personal and medical
//                                 information. All data transmission and storage are conducted in compliance with industry standards.</p>
//                         </div>
//                     </div>
//                     <hr style={{borderWidth: "0.5px", borderColor: "#767676", margin: "0 2vw"}}/>
//                     <div>
//                         <button className="faq_question" onClick={()=>{show(4)}}>
//                             Q. Are there any limitations on the types of medications I can order through Medigo?
//                         </button>
//                         <div className={selected===4?"show":"hide"}>
//                             <p>Medigo offers a wide range of medications, including prescription and over-the-counter
//                                 drugs, to meet various healthcare needs. However, certain controlled substances or medications
//                                 requiring special authorization may have restrictions based on local regulations.</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div className="motivation">
//                 <span>Nice to see you here, Don't miss the chance for this life is once</span>
//             </div>
//         </div>
//     );
//};
