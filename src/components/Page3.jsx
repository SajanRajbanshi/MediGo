import "./page3.css";
import React, { useState } from "react";
import profile1 from "./assets/pexels-asraful-chowdhury-15664597.jpg";
import profile2 from "./assets/pexels-fajar-ilham-8067738.jpg";
import profile3 from "./assets/pexels-fikri-hidayatullah-8864283.jpg";
import profile4 from "./assets/pexels-jep-gambardella-7690162.jpg";
import profile5 from "./assets/pexels-photo-15637510.jpeg";
import profile6 from "./assets/pexels-ron-lach-9869646.jpg";
import profile7 from "./assets/pexels-shashank-sharma-18500499.jpg";
import profile8 from "./assets/pexels-asraful-chowdhury-15664597.jpg";
import profile9 from "./assets/pexels-fajar-ilham-8067738.jpg";
import profile10 from "./assets/pexels-fikri-hidayatullah-8864283.jpg";
import profile11 from "./assets/pexels-jep-gambardella-7690162.jpg";
import profile12 from "./assets/pexels-ron-lach-9869646.jpg";

import social1 from "./assets/facebook-color-svgrepo-com.svg";
import social2 from "./assets/instagram-2-1-logo-svgrepo-com.svg";
import social3 from "./assets/youtube-color-svgrepo-com.svg";
import social4 from "./assets/twitter-color-svgrepo-com.svg";
import social5 from "./assets/linkedin-svgrepo-com.svg";

import carosel1 from "./assets/pexels-anna-shvets-4225881.jpg";
import carosel2 from "./assets/pexels-jopwell-2422290.jpg";
import carosel3 from "./assets/pexels-pixabay-263402.jpg";
import carosel4 from "./assets/pexels-shvetsa-3683074.jpg";
import carosel5 from "./assets/pexels-pixabay-236380.jpg";

let images = [carosel1, carosel2, carosel3, carosel4, carosel5];
const propertys = [
  "Online Consultant",
  "Social Forum",
  "Always Available",
  "Get Medicine",
  "Choose Best",
];
const definations = [
  "Get the best advice at the comfort of your home",
  "Connect with someone like you",
  "Any time, We are here",
  "No need to search, We have got you.",
  "Make the best choice",
];
let current = 0;

let caroselImage = carosel1;
let property = "Online Consultant";
let defination = "Get the best advice at the comfort of your home";

export default function Page3() {
  const [content1, setContent1] = useState(property);
  const [content2, setContent2] = useState(caroselImage);
  const [content3, setContent3] = useState(defination);
  function goleft() {
    console.log("left works");
    if (current === 0) {
      return;
    }
    current = current - 1;
    setContent2(images[current]);
    setContent1(propertys[current]);
    setContent3(definations[current]);
  }
  function goright() {
    console.log("right works");
    if (current >= images.length - 1) {
      return;
    }
    current = current + 1;
    setContent2(images[current]);
    setContent1(propertys[current]);
    setContent3(definations[current]);
  }

  return (
    <div className="page3" id="page3">
      <div className="socials" id="socials">
        <div className="text" id="text">
          <span>Trusted by</span>
          <span style={{ color: "#7ED957" }}>3000+ </span>
          <span>Patients all around the</span>
          <span style={{ color: "#6FC3DF" }}>India</span>
        </div>
        <div className="profiles" id="profiles">
          <div className="profile" id="profile">
            <img
              src={profile1}
              alt="img1"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile2}
              alt="img2"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile3}
              alt="img3"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile4}
              alt="img4"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile5}
              alt="img5"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile6}
              alt="img6"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile7}
              alt="img7"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile8}
              alt="img8"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile9}
              alt="img9"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile10}
              alt="img10"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile11}
              alt="img11"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
          <div className="profile">
            <img
              src={profile12}
              alt="img12"
              className="profile_picture"
              id="profile_picture"
            />
          </div>
        </div>
        <div className="social_medias" id="social_medias">
          <div className="media" id="media">
            <img
              src={social1}
              alt="facebook"
              className="media_picture"
              id="media_picture"
            />
          </div>
          <div className="media" id="media">
            <img
              src={social2}
              alt="instagram"
              className="media_picture"
              id="media_picture"
            />
          </div>
          <div className="media" id="media">
            <img
              src={social3}
              alt="youtube"
              className="media_picture"
              id="media_picture"
            />
          </div>
          <div className="media" id="media">
            <img
              src={social4}
              alt="twitter"
              className="media_picture"
              id="media_picture"
            />
          </div>
          <div className="media" id="media">
            <img
              src={social5}
              alt="linkedin"
              className="media_picture"
              id="media_picture"
            />
          </div>
        </div>
      </div>
      <div className="carousel_container" id="carousel_container">
        <div className="glassdiv3" id="glassdiv3">
          <div className="heading" id="heading">
            <span>Why choose us?</span>
          </div>
          <div className="view" id="view">
            <div className="glassdiv_button left_button" id="glassdiv_button">
              <button className="btn left_btn" onClick={goleft} id="btn">
                <span style={{ fontSize: "2vw", color: "white" }}>&#60;</span>
              </button>
            </div>
            <div className="image_container" id="image_container">
              <img
                src={content2}
                alt=""
                className="feature_image"
                id="feature_image"
              />
            </div>
            <div className="glassdiv_button right_button" id="glassdiv_button">
              <button className="btn right_btn" onClick={goright} id="btn">
                <span style={{ fontSize: "2vw", color: "white" }}>&#62;</span>
              </button>
            </div>
          </div>
          <div className="property" id="property">
            <span id="property">{content1}</span>
          </div>
          <div className="defination" id="defination">
            <span id="defination">{content3}</span>
          </div>
          <div className="learn_more" id="learn_more">
            <button className="learn_more_btn" id="learn_more_btn">
              Learn More
            </button>
          </div>
        </div>
        <div className="glassdiv_popup" id="popup">
          <ul className="services" id="services">
            <li className="list_item_service" id="list_item_service">
              Online Consultant
            </li>
            <li className="list_item_service" id="list_item_service">
              Social Forums
            </li>
            <li className="list_item_service" id="list_item_service">
              Always Available
            </li>
            <li className="list_item_service" id="list_item_service">
              Get Medicine
            </li>
            <li className="list_item_service" id="list_item_service">
              Choose Best
            </li>
          </ul>
        </div>
        <div className="bg_elements" id="bg_elements">
          <div className="element big_element1" id="element"></div>
          <div className="element big_element2" id="element"></div>
          <div className="element big_element3" id="element"></div>
          <div className="element big_element4" id="element"></div>
          <div className="element big_element5" id="element"></div>
        </div>
      </div>
      <div
        style={{
          fontSize: "4vw",
          textAlign: "center",
          color: "white",
          margin: "3vw 0 2vw 0",
        }}
      >
        <span>What everyone has to say about us</span>
      </div>
    </div>
  );
}
