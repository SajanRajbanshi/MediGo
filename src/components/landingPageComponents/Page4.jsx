import "./page4.css";

import profile1 from "./assets/pexels-asraful-chowdhury-15664597.jpg";
import profile2 from "./assets/pexels-fajar-ilham-8067738.jpg";
import profile3 from "./assets/pexels-fikri-hidayatullah-8864283.jpg";
import profile4 from "./assets/pexels-jep-gambardella-7690162.jpg";
import profile5 from "./assets/pexels-photo-15637510.jpeg";
import profile6 from "./assets/pexels-ron-lach-9869646.jpg";

export default function Page4() {
  return (
    <div className="page4" id="page4">
      <div className="review_container" id="review_container">
        <div className="glassdiv_review" id="glassdiv_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile1}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Neel Pathan</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              Medigo is a lifesaver! The online consultancy feature is
              incredibly convenient, especially for minor health concerns or
              questions. I've received prompt and professional advice from
              qualified medical professionals every time I've used the service.
            </p>
          </div>
        </div>
        <div className="glassdiv_review" id="glassdiv_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile2}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Anjali Shah</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              The community forums on Medigo provide a supportive space where
              users can share their experiences, ask questions, and offer
              advice. It's like having a virtual support group at your
              fingertips, which is invaluable for anyone navigating health
              issues.
            </p>
          </div>
        </div>
        <div className="glassdiv_review" id="glassdiv_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile3}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Kinjal Yadav</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              Ordering medicine through Medigo is hassle-free. The platform
              offers a wide range of medications, and the process is streamlined
              and efficient. Plus, knowing that I can easily access the
              medications I need from the comfort of my own home provides peace
              of mind.
            </p>
          </div>
        </div>
        <div className="glassdiv_review" id="glassdiv_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile4}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Kritika Patel</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              I'm impressed by Medigo's commitment to emergency medical
              services. In urgent situations, every minute counts, and having
              access to medical assistance through the platform can be a
              game-changer
            </p>
          </div>
        </div>
        <div className="glassdiv_review" id="glassdiv_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile5}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Mike Godfrey</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              One of the things I appreciate most about Medigo is its
              user-friendly interface. Whether I'm scheduling a consultation,
              participating in the community forums, or ordering medication, the
              platform is intuitive and easy to navigate
            </p>
          </div>
        </div>
        <div className="glassdiv_review" id="glassdic_review">
          <div className="user" id="user">
            <div className="profile" id="profile">
              <img
                src={profile6}
                alt="pp1"
                className="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="name" id="name">
              <span>Junior</span>
            </div>
          </div>
          <div className="review" id="review">
            <p>
              Overall, Medigo is an invaluable resource for anyone looking to
              take control of their health. From online consultations to
              community support to emergency services, the platform offers a
              comprehensive suite of tools and services to meet a variety of
              healthcare needs
            </p>
          </div>
        </div>
      </div>
      <div className="see_more" id="see_more">
        <button className="see_more_btn" id="see_more_btn">
          See More
        </button>
      </div>
      <div className="FAQ" id="FAQ">
        <span>Frequently Asked Questions</span>
      </div>
      <div className="faq_defined" id="faq_defined">
        <span>Here are some questions that we are Frequently asked.</span>
      </div>
    </div>
  );
}
