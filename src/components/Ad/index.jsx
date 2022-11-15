import React from 'react'

const Ad = ({children}) => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        background: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(119, 26, 83, 0.7450980392)',
    }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            width: 900,
            height: 500,
            backgroundColor: 'rgba(119, 26, 83, 1)',
          }}
        >
          {children}
        </div>
    </div>
  )
}

export default Ad