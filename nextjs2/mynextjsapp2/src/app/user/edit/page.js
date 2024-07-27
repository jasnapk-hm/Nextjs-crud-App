import React from 'react'

function Page() {
    return (
        <div>
            <h1>Edit Users</h1>
            <form style={{ display: 'flex', flexDirection: 'column',  maxWidth: '100%', backgroundColor:"grey" }}>
                <label style={{ marginBottom: '10px' }}>
                    Firstname:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Last name:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <button type="submit" style={{margin:"auto", marginTop: '10px',maxWidth: '10%' }}>Edit User</button>
            </form>
        </div>
    )
}

export default Page
