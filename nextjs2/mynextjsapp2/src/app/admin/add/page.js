import React from 'react'

function Page() {
    return (
        <div>
            <h1>Add Page</h1>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', backgroundColor:"grey"}}>
                <label style={{ marginBottom: '10px' }}>
                    Username:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Password:
                    <input type="password" style={{ marginLeft: '10px' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Mail ID:
                    <input type="email" style={{ marginLeft: '10px' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Mobile:
                    <input type="tel" style={{ marginLeft: '10px' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    City:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <button type="submit" style={{ marginTop: '10px' ,margin:"auto", maxWidth: '10%'}}>Add User</button>
            </form>
        </div>
    )
}

export default Page
