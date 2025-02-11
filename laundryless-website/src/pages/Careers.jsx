import "./Careers.css";
import React from "react";
import driver from "../assets/imgs/stock/pexels-tima-miroshnichenko-6169125.jpg";
import clothes from "../assets/imgs/stock/pexels-polina-tankilevitch-4440572.jpg";
import clothes2 from "../assets/imgs/stock/pexels-karolina-grabowska-4210860.jpg";
import clothes3 from "../assets/imgs/stock/pexels-myatezhny39-2927523.jpg";

const CareersPage = () => {
  return (
    <div className="careers">
      <h1>Careers at Laundryless</h1>
      <div className="one">
        <img src={driver} alt="" style={{ width: "16vw" }} />
        <p className="text">
          Thank you for your interest in joining our team at Laundryless! While
          we are not currently hiring, we are always on the lookout for talented
          and passionate individuals who share our vision and values. At
          Laundryless, we believe in fostering a collaborative and innovative
          work environment where creativity and dedication thrive. Our team is
          driven by a shared commitment to excellence, and we take pride in the
          work we do to serve our customers and community. Although there are no
          open positions at this time, we encourage you to check back regularly
          for future opportunities. If you'd like to stay connected, feel free
          to send us your resume at info@laundrylessatx.com or follow us on
          social media to stay updated on upcoming job openings. We appreciate
          your interest in Laundryless and look forward to the possibility of
          working together in the future!
        </p>
      </div>
      <br />
      <div className="one">
        <img src={clothes} alt="" style={{ width: "31.5vw" }} />
        <img src={clothes2} alt="" style={{ width: "31.5vw" }} />
      </div>
      <br />

      <div style={{ height: "45vh" }}>
        <img src={clothes3} alt="" className="img" />
      </div>
    </div>
  );
};

export default CareersPage;
