import React from 'react';

const Page = () => {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f2f2f2',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ 
                color: '#333',
                marginBottom: '10px'
            }}>Contact Information</h2>
            <p style={{ 
                color: '#666',
                fontSize: '16px'
            }}>Email: example@example.com</p>
            <p style={{ 
                color: '#666',
                fontSize: '16px'
            }}>Phone: 123-456-7890</p>
            <p style={{ 
                color: '#666',
                fontSize: '16px'
            }}>Address: 123 Main St, City, State</p>
        </div>
    );
};

export default Page;
