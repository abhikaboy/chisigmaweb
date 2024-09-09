import React from 'react'
import { images } from 'theme'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import styles from './brothers.module.scss'
import { tauData, sigmaData, rhoData, piData, omnicronData } from './classData'

const ClassSection = ({ className, data }) => (
  <div style={{ padding: '2rem' }}>
    <div
      className={styles.sectionTitle}
      style={{ paddingLeft: '5%', paddingRight: '10%' }}
    >
      <h2
        style={{
          color: '#003366',
          fontSize: '3rem',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        {className}
      </h2>
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '0%',
        color: '#003366',
      }}
    >
      {data.map((person) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '21%',
            marginTop: '2rem',
            marginRight: '2rem',
          }}
        >
          <img
            src={person.picture}
            alt={person.name}
            className={styles.brotherImage}
            style={{ width: '45%', borderRadius: '10px' }}
          />
          <div style={{ paddingLeft: '1rem' }}>
            <h4
              style={{
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              {person.name}
            </h4>
            <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>
              {person.year}
            </p>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                paddingTop: '10%',
              }}
            >
              {person.major} Major
            </p>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              <a href={person.linkedin}>
                <img
                  className={styles.clickable}
                  src="https://www.vikingcamps.com/wp-content/uploads/2024/01/linkedin-logo-linkedin-icon-transparent-free-png.webp"
                  alt="linkedin"
                  style={{
                    width: '35px',
                    height: '35px',
                    marginRight: '1rem',
                    marginTop: '-7px',
                  }}
                />
              </a>
              <img
                className={styles.clickable}
                src={images.email}
                alt="instagram"
                style={{ width: '25px', height: '20px' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Default = () => (
  <html lang="en" style={{ backgroundColor: '#fffffc' }}>
    <Navbar />
    {/* Landing */}
    <div style={{ height: '100vh', width: '100%' }}>
      <h2
        style={{
          color: '#003366',
          fontSize: '3rem',
          textAlign: 'center',
          verticalAlign: 'middle',
          marginTop: '20%',
        }}
      >
        Brother Directory
      </h2>
      <p style={{ textAlign: 'center' }}>Meet all of our current brothers.</p>
      <img
        src={images.right}
        alt="fullLogo"
        style={{ width: '20%', top: '15%', position: 'absolute', right: '10%' }}
      />
      <img
        src={images.left}
        alt="fullLogo"
        style={{ width: '30%', top: '12%', position: 'absolute', left: '10%' }}
      />
    </div>
    <ClassSection className="Tau Class" data={tauData} />
    <ClassSection className="Sigma Class" data={sigmaData} />
    <ClassSection className="Rho Class" data={rhoData} />
    <ClassSection className="Pi Class" data={piData} />
    <ClassSection className="Omnicron Class" data={omnicronData} />
    <div style={{ padding: '10%' }} />
    <Footer />
  </html>
)

export default Default
