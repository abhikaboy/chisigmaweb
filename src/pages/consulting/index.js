import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
// import styles from './rush.module.scss'
/* import { images } from 'theme';
import Newbutton from 'components/Newbutton';
import Card from 'components/Card'; */
const Default = () => (
  <html lang="en" style={{ backgroundColor: '#fffffc' }}>
    <Navbar />
    <div style={{ padding: '3.5rem' }}>
      <h1 style={{ marginTop: '20vh', fontSize: '3rem' }}>
        Chi Sigma Consulting
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>
        Chi Sigma Consulting is a pro-bono consulting group dedicated to
        delivering both impactful and lasting solutions for nonprofits in the
        Greater Boston Area. Our diverse group of Northeastern University
        students draws on experience that spans 8 disciplines, from investment
        banking to mechanical engineering. As aspiring consultants with a
        passion for problem solving, we seek opportunities to apply our
        knowledge and research to real business situations with the goal of
        adding tangible value for clients.
        <br /> <br />
        We were founded by a group of motivated students who aim to bring
        positive impact to the greater Boston community. We share that passion
        for service and many of us have deeply rooted personal connections to
        the nonprofits and charities that we service.
      </p>
      <img
        alt="logo"
        style={{ align: 'center', width: '50%', margin: 'auto' }}
        src="https://images.squarespace-cdn.com/content/v1/54ce5ff3e4b0202a8b73aa96/1544976779249-UHC5XX5ZI6ZTZ7XYSERL/chi%2Bsigma%2B%25283%2529.jpg?format=2500w"
      />
    </div>
    <Footer />
  </html>
)
export default Default
