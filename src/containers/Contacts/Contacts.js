import React, {useEffect, useState} from 'react';
import './Contacts.css';
import axiosOrders from "../../axiosOrders";

const Contacts = () => {
    const [contacts, setContacts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/contacts.json');
            const newContacts = response.data;
            setContacts(newContacts);
        }
        fetchData().catch(console.error);
    }, []);


    return (
        <div className="container">
            <h2>Contacts</h2>
            <p><b>State: </b>{contacts.state}</p>
            <p><b>City: </b>{contacts.city}</p>
            <p><b>Street: </b>{contacts.street}</p>
            <p><b>Zip Code: </b>{contacts.zipcode}</p>
            <p><b>Phone number: </b>{contacts.phone}</p>
            <p><b>Email: </b>{contacts.email}</p>
        </div>
    );
};

export default Contacts;