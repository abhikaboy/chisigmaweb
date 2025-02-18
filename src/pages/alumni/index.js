/* eslint-disable */

import React, { useEffect, useState } from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { images } from 'theme'
import Papa from 'papaparse'
import Header from './header'
import Row from './row'

import styles from './alumni.module.scss'

const Default = () => {
  // const [search, setSearch] = useState('')

  const [classFilter, setClassFilter] = useState(-1)

  const [password, setPassword] = useState('')
  const [authorized, setAuthorized] = useState(false)

  const classTagStyle = {
    fontWeight: 'bold',
    padding: '0.6rem',
    color: '#23488F',
    border: '1px solid',
    borderRadius: '90px',
    marginLeft: '5px',
  }
  const classTags = [
    'Charter',
    'Alpha',
    'Beta',
    'Gamma',
    'Delta',
    'Epsilon',
    'Zeta',
    'Eta',
    'Theta',
    'Iota',
    'Kappa',
    'Lambda',
    'Mu',
    'Nu',
    'Xi',
    'Transfer',
  ]

  const classData = [
    {
      name: 'Charter',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/charter.csv',
    },
    {
      name: 'Alpha',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/alpha.csv',
    },
    {
      name: 'Beta',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/beta.csv',
    },
    {
      name: 'Gamma',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/gamma.csv',
    },
    {
      name: 'Delta',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/delta.csv',
    },
    {
      name: 'Epsilon',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/epsilon.csv',
    },
    {
      name: 'Zeta',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/zeta.csv',
    },
    {
      name: 'Eta',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/eta.csv',
    },
    {
      name: 'Theta',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/theta.csv',
    },
    {
      name: 'Iota',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/iota.csv',
    },
    {
      name: 'Kappa',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/kappa.csv',
    },
    {
      name: 'Lambda',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/lambda.csv',
    },
    {
      name: 'Mu',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/mu.csv',
    },
    {
      name: 'Nu',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/nu.csv',
    },
    {
      name: 'Xi',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/xi.csv',
    },
    {
      name: 'Transfer',
      url: 'https://playground-bucket-beak.s3.us-east-2.amazonaws.com/transfer.csv',
    },
  ]

  const [classRowData, setClassRowData] = useState(classData.map(() => []))

  useEffect(() => {
    classData.forEach((row, index) => {
      Papa.parse(row.url, {
        download: true,
        header: true,
        complete: (results) => {
          const copy = classRowData
          copy[index] = results.data
          setClassRowData(copy)
          console.log('UPDATIGN THE ROW DATA')
        },
      })
    })
  }, [classData])

  useEffect(() => {
    console.log(classRowData)
  }, [classRowData])

  if (!authorized) {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 'auto',
          padding: '3.5rem',
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '10px',
          spacing: '20px',
        }}
      >
        <h3>Password Protected</h3>
        <input
          style={{
            padding: '10px',
            border: '0px solid #23488F',
            backgroundColor: '#fffffc',
            color: '#23488F',
            width: '50%',
            borderRadius: '5px',
            paddingLeft: '20px',
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => setAuthorized(password === 'mushroom')}
          style={{
            backgroundColor: '#23488F',
            color: '#fffffc',
            padding: '10px',
            borderRadius: '5px',
            border: '0px solid #23488F',
            width: '50%',
          }}
        >
          Enter
        </button>
      </div>
    )
  }

  return (
    <html lang="en" style={{ backgroundColor: '#fffffc' }}>
      <Navbar />
      <div style={{ padding: '3.5rem' }}>
        <h1 style={{ marginTop: '20vh', fontSize: '3rem', color: '#23488F' }}>
          Alumni Database
        </h1>
        <div
          style={{
            width: '100%',
            borderRadius: '5px',
            border: '0px solid #23488F',
            fontSize: '1rem',
            paddingLeft: '1rem',
            flexDirection: 'row',
            display: 'flex',
            marginTop: '20px',
            boxShadow: '0 3px 6px 0px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={images.search}
            alt="search"
            style={{
              width: '25px',
              height: '25px',
              display: 'inline',
              margin: 'auto',
            }}
          />
          <input
            placeholder="Search any Person, Place, or any Company"
            style={{
              width: '100%',
              border: 'none',
              padding: '1rem',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            overflowX: 'scroll',
            padding: '1rem',
          }}
        >
          {classTags.map((tag, index) => (
            <div
              style={classTagStyle}
              className={styles.tag}
              onClick={() => setClassFilter(index)}
            >
              {tag}
            </div>
          ))}
        </div>
        <div>
          <Header />
          {classFilter > -1
            ? classRowData[classFilter].map((row) => (
                <Row
                  name={row.Name}
                  occupation={row['Most Recent Job']}
                  company={row.Company}
                  industry={row.Industry}
                  location={row.Location}
                  pledgeClass={classData[classFilter].name}
                />
              ))
            : classRowData.map((pClass, index) => (
                <div style={{ marginTop: '1rem' }}>
                  {pClass.map((row) => (
                    <Row
                      name={row.Name}
                      occupation={row['Most Recent Job']}
                      company={row.Company}
                      industry={row.Industry}
                      location={row.Location}
                      pledgeClass={classData[index].name}
                    />
                  ))}
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </html>
  )
}
export default Default
