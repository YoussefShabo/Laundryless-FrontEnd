import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is the turnaround time?",
      answer:
        "Place an order before 10am and it will be returned the next day. This excludes Saturday locker drop, public holidays and garments that require special services or a stain treatment or restoration.",
    },
    {
      question: "How do I make payment?",
      answer:
        "When you create an account in the app or online, your payment details are stored securely online with our credit card processor. Your card on file will be charged before delivery. You are able to view your receipt in your app or in your web portal. To view our full price list, please visit the pricing section of this website.",
    },
    {
      question: "What is the price for the Laundryless ATX service?",
      answer:
        "The price is $2.99/lb for the Standard service and $3.99/lb for the Expedited service",
    },
    {
      question:
        "How do I make special requests for my order or use your alterations service?",
      answer:
        "If you have any special requests or alterations, please include details in your order in the app or in the notes section online. Please place all alterations in the Blue Tote Bag.",
    },
    {
      question: "What is the LAUNDRYLESS ATX VIP Bag Kit?",
      answer:
        "You will receive a 20lb LAUNDRYLESS VIP Bag free of charge with your first order. The LAUNDRYLESS  VIP Bags protect your garments and keeps them in pristine condition. Use this bag with every order.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We service Austin, TX, mainly the 78701, 78703, 78705 zipcode areas. And you will find our lockers in affiliate apartment complexes.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a receipt.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and viewing your order history.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our customer support team is available 24/7 via email and phone at laundrylessinfo@gmail.com or call us at (512) 814-7675.",
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-questions">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="contact">
        <br />
        <br />
        <br />
        <hr />
        <br />
        <center>
          <h2>Contact Us</h2>
          <p className="faqParagraph">
            Have questions or need assistance? Our friendly team is here to
            help. Reach out to us at laundrylessinfo@gmail.com or call us at
            (512) 814-7675.
          </p>
        </center>
      </div>
      <div className="foot" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default Faq;
