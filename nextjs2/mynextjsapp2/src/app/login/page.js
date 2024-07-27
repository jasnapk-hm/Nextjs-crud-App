"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
const Page = () => {
    const router = useRouter();
    const [users, setUsers] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const checkLogin = () => {
        if (users === "admin" && password === "admin") {
            setError("");
            router.push("/admin");
        } else {
            // alert("Invalid Login");
            setError("Username or Password is incorrect");
        }
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Login</h1>
            <div style={{color:'red'}}>
                {error}
            </div>
            <input
                type="text"
                placeholder="Username"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setUsers(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }} onClick={checkLogin}>
                Login
            </button>
        </div>
    );
};

export default Page;
