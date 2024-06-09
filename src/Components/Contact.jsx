import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
const Contact = () => {
  const Wrapper = styled.section`
    .contact-container {
      display: flex;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin: 0 auto;
    }
    .contact-left {
      width: 60%;
    }

    .contact-left,
    .contact-right {
      padding: 0.5rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin: 5px 0 2px;
      color: #555;
    }

    input,
    textarea {
      padding: 0.2rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 12px;
      //  width: calc(100% - 22px);
    }

    textarea {
      resize: vertical;
    }

    button {
      margin-top: 15px;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #555;
    }

    .contact-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 40%;
    }

    .contact-right p {
      font-size: 18px;
      margin: 10px 0;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      margin-top: 0px;
    }

    .social-icons a {
      margin: 0 10px;
      color: #333;
      font-size: 24px;
      text-decoration: none;
    }

    .social-icons a:hover {
      color: #555;
    }
    .padding {
      padding: 0 3rem;
    }
    @media screen and (max-width: 768px) {
      .padding {
        padding: 0 1rem;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
      .contact-container {
        flex-direction: column;
      }
      .contact-left {
        order: 1;
        width: 100%;
      }
      .contact-right {
        order: 2;
        width: 100%;
      }
      .contact-left,
      .contact-right {
        width: 100%;
      }
      input,
      textarea {
        padding: 0.2rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1.5rem;
        //  width: calc(100% - 22px);
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="container ">
          <div className="row  padding">
            <div className="contact-right">
              {/* <h2 className="color">Reach Me At</h2> */}
              <p>
                <i className="fas fa-envelope" /> muhammadasad15100@gmail.com
              </p>
              <div className="social-icons">
                <a href="https://github.com/yourprofile" target="_blank">
                  <FaGithubSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-asad-5560811b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
            <div className="contact-left">
              <h1 className="color">Contact us</h1>
              <form action="https://formspree.io/f/xwkdkedy" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required="" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required=""
                  defaultValue={""}
                />
                <button type="submit" value="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
