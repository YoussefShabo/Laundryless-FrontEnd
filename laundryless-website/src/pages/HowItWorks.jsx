import "./HowItWorks.css";
import stepOne from "../assets/imgs/01-Process.webp";
import stepTwo from "../assets/imgs/02-Process.webp";
import stepThree from "../assets/imgs/03-Process.webp";
import name from "../assets/imgs/inLineNameGrey.svg";

const HowItWorks = () => {
  return (
    <>
      <div className="titleSection">
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="title">HOW IT WORKS: 3 SIMPLE STEPS</h1>
          <p className="subTitle">
            learn how <img src={name} height={11} /> works at your concierge
          </p>
        </center>
      </div>
      <div className="stepsSection">
        <div className="stepBox">
          <div className="text">
            <h1>01. DROP OFF YOUR LAUNDRY</h1>
            <p>
              Create an account HERE and lock dry cleaning or laundry in any
              unlocked locker.
            </p>
          </div>
          <img
            src={stepOne}
            alt="Woman placing Laundry in Locker"
            className="stepImg"
          />
        </div>
        <div className="stepBox">
          <img
            src={stepTwo}
            alt="Woman on a computer placing order online"
            className="stepImg"
          />
          <div className="text">
            <h1>02. PLACE YOUR ORDER</h1>
            <p>Place your order through the app with any specific options.</p>
          </div>
        </div>
        <div className="stepBox">
          <div className="text">
            <h1>03. PICK UP YOUR LAUNDRY</h1>
            <p>
              We notify you via SMS and email with the locker number your order
              is in and the code to open it.
            </p>
            <p className="subText">
              Pick-ups are run daily from Monday - Friday. For a faster
              turn-around place an order before 11.30am Monday - Thursday. This
              excludes laundry, shoe repairs and specialty items.
            </p>
          </div>
          <img
            src={stepThree}
            alt="woman on phone recieving a notification"
            className="stepImg"
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
