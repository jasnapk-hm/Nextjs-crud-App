"use client"
import React, { useState } from 'react'

function HomePage(props) {
    const [name, setName] = useState('My State Value')
    return (
        <div>
            <h1>Dashboard Page</h1>
            {props.title}
            {/* <h2>{name}</h2> */}
            {/* <button onClick={() => setName('New State Value')}>Change State</button>     */}
        </div>
    )
}

export default HomePage
