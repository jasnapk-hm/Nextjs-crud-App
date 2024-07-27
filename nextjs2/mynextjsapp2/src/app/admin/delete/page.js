import React from 'react'

function Page() {
    return (
        <div>
            <h1>Delete Users</h1>
            <form style={{ display: 'flex', flexDirection: 'column',  maxWidth: '100%', backgroundColor:"grey"}}>
                <label style={{ marginBottom: '10px' }}>
                    Username:
                    <input type="text" style={{ marginLeft: '10px' }} />
                </label>
                <button type="submit" style={{ marginTop: '10px',margin:"auto" ,maxWidth: '10%'}}>Delete User</button>
            </form>
        </div>
    )
}

export default Page
