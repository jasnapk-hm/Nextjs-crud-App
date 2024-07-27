"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
const Page = () => {
    const router = useRouter();
    const [users, setUsers] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    // const checkLogin = () => {
    //     if (users === "admin" && password === "admin") {
    //         setError("");
    //         router.push("/admin");
    //     } else {
    //         // alert("Invalid Login");
    //         setError("Name or Password is incorrect");
    //     }
    // };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Add Information</h1>
            <div style={{color:'red'}}>
                {error}
            </div>
            <input
                type="text"
                placeholder="firstName"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setUsers(e.target.value);
                }}
            />
              <input
                type="text"
                placeholder="LastName"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setLastname(e.target.value);
                }}
            />
              <input
                type="text"
                placeholder="Address"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Pincode"
                style={{ marginBottom: '10px', padding: '5px' }}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }} >
              Add
            </button>
        </div>
    );
};

export default Page;
