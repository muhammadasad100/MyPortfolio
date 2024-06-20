import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//import { SkEduExp } from "./SkEduExp";
import { useglobalcontext } from "../../context/contextdata";
//import { CurrencyExchange } from "@mui/icons-material";
const About = () => {
  const { skills, education, experience } = useglobalcontext();
  const [selectedLink, setSelectedLink] = useState("skills");
  const [getData, setData] = useState(skills);
  console.log("In about sec data comes from context", skills);

  const handleNavLinkClick = (id) => {
    setSelectedLink(id);
  };
  console.log("i selected ", selectedLink);

  const fetchData = async (id) => {
    try {
      switch (id) {
        case "skills":
          setData(skills);
          break;
        case "experience":
          setData(experience);
          break;
        case "education":
          setData(education);
          break;

        default:
          break;
      }

      // setData([]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedLink) {
      fetchData(selectedLink);
    }
  }, [selectedLink]);
  console.log("data on the base of selection ", getData);
  //change data on run time

  const Wrapper = styled.section`
    .rowno {
      display: flex;
      padding: 0.5rem 5rem;
      gap: 2rem;
    }

    .imagesec {
      //justify-content: flex-start;
      // background-color: lightblue;
    }
    /* .gap {
      padding: 1rem 3rem;
    } */
    .parasize {
      font-size: 0.9rem;
    }
    /* .skillssec {
      padding: 1rem;
    } */

    .skillssecdesign {
      text-align: center;
      width: 90px;
      margin: 0.5rem;
      display: inline-block;
      border: 1px solid;
      border-radius: 10px;
      padding: 0.1rem;
      color: white;
      background-color: #333;
      font-size: 1rem;
      font-weight: bold;
    }

    .images {
      width: 220px;
      height: 240px;
      border-radius: 10px;
      //object-fit: contain;
    }
    /* .contentsec {
      align-self: flex-start;
    } */
    .nav-links {
      /* margin-top: 1rem; */
      display: flex;
      list-style: none;
    }

    .active {
      border: none;
      background-color: transparent;
      /* color: red;
      font-weight: bold; */
      border-bottom: 3px solid #555;

      // border-top: 2px solid red;
    }
    .border {
      border: none;
    }

    .nav-links li {
      margin-right: 10px;
    }

    .nav-links a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
    .center {
      margin-bottom: 1rem;
      text-align: center;
    }
    .showdata {
      margin-top: 0.5rem;
    }
    @media screen and (max-width: 768px) {
      .rowno {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0rem 0.5rem;
        gap: 2rem;
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1 className="center color">About Me</h1>
          <div className="rowno">
            <div className="imagesec">
              <img src="../Images/asad.png" alt="" className="images" />
            </div>
            <div className="contentsec">
              <p className="parasize">
                Passionate and motivated beginner web developer with hands-on
                experience in building responsive and dynamic web applications.
                Proficient in front-end technologies including HTML, CSS, and
                JavaScript with understanding of popular frameworks like
                Bootstrap and React. Possesses knowledge of server-side
                development using Node.js.
              </p>
              <ul className="nav-links">
                <li className="sizefont">
                  <NavLink
                    to=" "
                    className={selectedLink === "skills" ? "active" : "border"}
                    onClick={() => handleNavLinkClick("skills")}
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=" "
                    className={
                      selectedLink === "experience" ? " active" : " border"
                    }
                    onClick={() => handleNavLinkClick("experience")}
                  >
                    Experience
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to=" "
                    className={
                      selectedLink === "education" ? " active" : "border "
                    }
                    onClick={() => handleNavLinkClick("education")}
                  >
                    Education
                  </NavLink>
                </li>
              </ul>
              <div className="showdata">
                {getData.map((item) => {
                  console.log("items in div section ", item);
                  return (
                    <>
                      {selectedLink === "skills" && (
                        <p className="skillssecdesign">{item.skillname}</p>
                      )}
                      {selectedLink === "experience" && (
                        <li>
                          <strong>{item.year}</strong>
                          <br /> {item.companyname}
                        </li>
                      )}
                      {selectedLink === "education" && (
                        <li>
                          <strong>{item.year}</strong>
                          <br /> {item.degreename}
                        </li>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
