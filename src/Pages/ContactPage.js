import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { LinearProgress } from "@material-ui/core";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
function ContactPage() {
  const [bool, setBool] = useState(true);
  const [succ, setSucc] = useState(false);
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({
    to_name: "",
    subject: "",
    email: "",
    message: "",
  });
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
    let c = 0;
    for (let key in state) {
      if (state[key] !== "") c++;
    }
    if (c == 4) setBool(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .send(
        "service_6o3hl2p",
        "template_bkwaeks",
        state,
        "user_fkTRHDlh5ESRwFvK4Y4hw"
      )
      .then((res) => {
        setLoad(false);
        setSucc(true);
        setState({
          to_name: "",
          subject: "",
          email: "",
          message: "",
        });
      });
  };
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MainLayout>
        <Title title={"Contact"} span={"Contact"} />
        <ContactPageStyled>
          <InnerLayout className={"contact-section"}>
            <div className="left-content">
              <div className="contact-title">
                <h4>Get In Touch</h4>
              </div>
              <form className="form">
                <div className="form-field">
                  <label htmlFor="name">Enter your name*</label>
                  <input
                    type="text"
                    id="name"
                    value={state.to_name}
                    name="to_name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Enter your email*</label>
                  <input
                    type="email"
                    id="email"
                    value={state.email}
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Enter your subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={state.subject}
                    name="subject"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="text-area">Enter your Message*</label>
                  <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    name="message"
                    onChange={handleChange}
                    value={state.message}
                    required
                  ></textarea>
                </div>
                <div className="form-field f-button">
                  {!succ ? (
                    <button
                      className={`${bool ? "disa" : "active"}`}
                      disabled={bool}
                      onClick={sendEmail}
                    >
                      send email {load && <LinearProgress />}
                    </button>
                  ) : (
                    <button
                      className="active"
                      style={{ pointerEvents: "none" }}
                      disabled={bool}
                    >
                      Thanks, I have received your email.
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="right-content">
              <ContactItem
                title={"Phone"}
                icon={phone}
                cont1={"+91-7992245309"}
              />
              <ContactItem
                title={"Email"}
                icon={email}
                cont1={"sabhisheksingh6@gmail.com"}
              />
              <ContactItem
                title={"Address"}
                icon={location}
                cont1={"Mission Road, Aurangabad, Bihar"}
                cont2={"India"}
              />
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
    </motion.nav>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      svg {
        fill: var(--primary-color);
      }
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }

  .disa {
    background-color: var(--primary-color);
    opacity: 0.3;
    padding: 0.8rem 2.5rem;
    color: white;
    pointer-events: none;
    cursor: not-allowed;
    display: inline-block;
    font-size: inherit;
    border: none;
    text-transform: uppercase;

    position: relative;
    transition: all 0.4s ease-in-out;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.2rem;
      transition: all 0.4s ease-in-out;
      left: 0;
      bottom: 0;
      opacity: 0.7;
    }
    &:hover::after {
      width: 100%;
      background-color: var(--white-color);
    }
  }
  .active {
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    border: none;
    text-transform: uppercase;

    position: relative;
    transition: all 0.4s ease-in-out;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.2rem;
      transition: all 0.4s ease-in-out;
      left: 0;
      bottom: 0;
      opacity: 0.7;
    }
    &:hover::after {
      width: 100%;
      background-color: var(--white-color);
    }
  }
  .f-button {
    display: flex;
    align-items: center;
  }
`;

export default ContactPage;
