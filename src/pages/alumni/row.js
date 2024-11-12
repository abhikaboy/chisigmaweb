import React from 'react'

export default function Row({
  name,
  occupation,
  company,
  industry,
  location,
  pledgeClass,
}) {
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
        // border: '1px solid #23488F',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        marginTop: '4px',
        padding: '1rem',
        fontSize: '1rem',
        flexDirection: 'row',
        display: 'flex',
        color: '#23488F',
        justifyItems: 'left',
      }}
    >
      <div style={colStyle}>{name}</div>
      <div style={colStyle}>{occupation}</div>
      <div style={colStyle}>{company}</div>
      <div style={colStyle}>{industry}</div>
      <div style={colStyle}>{location}</div>
      <div style={colStyle}>{pledgeClass}</div>
    </div>
  )
}
