import React from 'react'

function Page() {
    return (
        <div>
            <h1>Delete Users</h1>
            <form style={{ display: 'flex', flexDirection: 'column',  maxWidth: '100%', backgroundColor:"grey"}}>
                <label style={{ marginBottom: '10px' }}>
                    Firstname:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <button type="submit" style={{  margin:"auto",padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>Delete User</button>
            </form>
        </div>
    )
}

export default Page
