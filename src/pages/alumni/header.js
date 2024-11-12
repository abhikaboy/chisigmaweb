import React from 'react'

export default function Header() {
  const colStyle = {
    width: '100%',
    textAlign: 'center',
  }
  return (
    <div
      style={{
        width: '100%',
        paddingLeft: '1rem',
        backgroundColor: '#ffffff',
        border: '0px solid #23488F',
        borderRadius: '5px',
        marginTop: '20px',
        padding: '1rem',
        fontSize: '1rem',
        flexDirection: 'row',
        display: 'flex',
        color: '#23488F',
        fontWeight: 'bold',
        justifyItems: 'left',
      }}
    >
      <div style={colStyle}>NAME</div>
      <div style={colStyle}>OCCUPATION</div>
      <div style={colStyle}>COMPANY</div>
      <div style={colStyle}>INDUSTRY</div>
      <div style={colStyle}>LOCATION</div>
      <div style={colStyle}>CLASS</div>
    </div>
  )
}
