import React from 'react'

function Page() {
    return (
        <div>
            <h1>View Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>user1</td>
                        <td>user@user.com</td>
                        <td>user</td>
                    </tr>
                    <tr>
                        <td>admin1</td>
                        <td>admin@admin.com</td>
                        <td>admin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Page
