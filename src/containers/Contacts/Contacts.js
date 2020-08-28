import React, {useEffect, useState} from 'react';
import './Contacts.css';
import axiosOrders from "../../axiosOrders";

const Contacts = () => {
    const [contacts, setContacts] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/contacts.json');
            const newContacts = response.data;
            setContacts(newContacts);
        }
        fetchData().catch(console.error);
    }, []);

    const changeContacts = event => {
        const name = event.target.name;
        const value = event.target.value;
        const newContacts = {...contacts};
        newContacts[name] = value;
        setContacts(newContacts);
    }

    const saveChanges = async () => {
        const contactsCopy = {...contacts};
        try {
            await axiosOrders.put('/contacts.json', contactsCopy);
        } finally {
            setShowEdit(!showEdit)
        }
    };

    return (
        <div className="container">
            <h2>Contacts</h2>
            <p><b>State: </b>{contacts.state}</p>
            <p><b>City: </b>{contacts.city}</p>
            <p><b>Street: </b>{contacts.street}</p>
            <p><b>Zip Code: </b>{contacts.zipcode}</p>
            <p><b>Phone number: </b>{contacts.phone}</p>
            <p><b>Email: </b>{contacts.email}</p>
            <button type="button" className="btn" onClick={() => setShowEdit(!showEdit)}>Edit</button>
            {
                showEdit ?
                    <>
                        <p>State: <input
                            type="text"
                            name="state"
                            value={contacts.state}
                            onChange={changeContacts}
                        /></p>
                        <p>City: <input
                            type="text"
                            name="city"
                            value={contacts.city}
                            onChange={changeContacts}
                        /></p>
                        <p>Street: <input
                            type="text"
                            name="street"
                            value={contacts.street}
                            onChange={changeContacts}
                        /></p>
                        <p>Zip Code: <input
                            type="text"
                            name="zipcode"
                            value={contacts.zipcode}
                            onChange={changeContacts}
                        /></p>
                        <p>Phone number: <input
                            type="text"
                            name="phone"
                            value={contacts.phone}
                            onChange={changeContacts}
                        /></p>
                        <p>Email: <input
                            type="text"
                            name="email"
                            value={contacts.email}
                            onChange={changeContacts}
                        /></p>
                        <button type="button" onClick={saveChanges}>Save</button>
                    </> : null
            }
        </div>
    );
};

export default Contacts;