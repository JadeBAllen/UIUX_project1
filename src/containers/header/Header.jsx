import React from 'react';
import "./header.css";
import Group from "../../assets/Group 81.png";
import Illustration from "../../assets/Illustration.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing.
          Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <div className="gpt3__header-content__input">
            <input type='email' placeholder="Enter Your Email Address" />
            <button type="Button">Get Started</button>
        </div>
        <div className="gpt3__header-content__group">
          <img src={Group} alt="group" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={Illustration} alt="illustration" />
      </div>
    </div>
  )
}

export default Header
