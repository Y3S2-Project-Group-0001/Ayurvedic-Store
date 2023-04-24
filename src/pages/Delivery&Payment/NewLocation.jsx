import React from 'react'

function NewLocation({ address, streetName, city, savedLocation = false }) {
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: 'gray',
      }}
    >
      {savedLocation ? (
        <span>
          Saved
          <br />
          Location
        </span>
      ) : (
        <span>
          New
          <br />
          Location
        </span>
      )}
      {savedLocation && (
        <div style={{ paddingTop: 10 }}>
          {address}, {streetName},<br />
          {city}
        </div>
      )}
    </div>
  )
}

export default NewLocation
