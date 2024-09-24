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
      <h1 style={{ marginTop: '20vh', fontSize: '3rem' }}>Alumni Database</h1>
    </div>
    <Footer />
  </html>
)
export default Default
