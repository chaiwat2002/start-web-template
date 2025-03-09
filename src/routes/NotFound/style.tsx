import styled from "styled-components"

export const PageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito Sans", sans-serif;
  color: "#0e0620";
  font-size: 1em;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 20px;
`

export const TextWrapper = styled.div`
  max-width: 500px;
`

export const Heading = styled.h1`
  font-size: 7.5em;
  font-weight: bold;
  margin: 15px 0;
`

export const SubHeading = styled.h2`
  font-weight: bold;
`

export const Paragraph = styled.p`
  margin-bottom: 20px;
`

export const Button = styled.button`
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  border: 4px solid "#2ccf6d";
  color: "#0e0620";
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: "#2ccf6d";
    z-index: -1;
    transition: 0.2s ease;
  }
  &:hover {
    color: "#ffffff";
    background: "#2ccf6d";
    &:before {
      width: 100%;
    }
  }
`