import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
     html, body{
        font-family: 'Poppins', sans-serif;
       
        width: 100vw;
        height: 100vh;
      }
      //all  paragraph tag attributes in css?
     li{
      list-style: none;
     }
     .color{
      color: green;
      font-weight: bold;
      text-align: center;
     }
      p{
     white-space: normal;
     text-align: justify;
      }
.container{
  
  //margin: 0.3rem auto;
  padding: 1rem 1rem;
  position: relative;

}

.row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      gap: 1.5rem;
    }

  /* Set a base font size and line height */
  

  /* Apply some basic typography styles */




`;
