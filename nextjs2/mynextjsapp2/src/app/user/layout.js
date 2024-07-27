import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <div className="links" style={{ display: 'block', background: 'black', padding: '10px' }}>
                <Link href="/user" style={{ marginRight: '10px' }}>Add</Link>
                <Link href="/user/edit" style={{ marginRight: '10px' }}>Edit</Link>
                <Link href="/user/delete" style={{ marginRight: '10px' }}>Delete</Link>
                <Link href="/user/view" style={{ marginRight: '10px' }}>View</Link>
                <a href="/" style={{ marginRight: '10px' }}>Logout</a>
            </div>
            <div className="content" style={{ display: 'block', background: 'grey', padding: '20px' }}>
                {children}
            </div>
        </div>
    )
}