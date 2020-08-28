import React, {useEffect, useState} from 'react';
import './About.css'
import axiosOrders from "../../axiosOrders";

const About = () => {
    const [about, setAbout] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/about.json');
            const newAbout = response.data;
            setAbout(newAbout);
        }
        fetchData().catch(console.error);
    }, []);

    const changeAbout = event => {
        const value = event.target.value;
        const newAbout = {...about};
        newAbout.info = value;
        setAbout(newAbout);
    }

    const saveChanges = async () => {
        const aboutCopy = {...about};
        try {
            await axiosOrders.put('/about.json', aboutCopy);
        } finally {
            setShowEdit(!showEdit)
        }
    };

    return (
        <div className="container">
            <h2>About us</h2>
            <p className="info">{about.info}</p>
            <button type="button" className="btn" onClick={() => setShowEdit(!showEdit)}>Edit</button>
            {
                showEdit ?
                    <>
                    <textarea
                        value={about.info}
                        className="aboutEdit"
                        name="info"
                        onChange={changeAbout}
                    />
                        <button type="button" className="btn" onClick={saveChanges}>Save</button>
                    </> : null
            }

        </div>
    );
};

export default About;