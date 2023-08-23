import React from 'react';
import './Call.css'; // Assuming you'll create a CSS file named "Contact.css"

const Call = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Me</h1>
            <p className="contact-details">
                Feel free to reach out to me via email:
                <a className="contact-email" href="mailto:abd.awaisy@gmail.com">abd.awaisy@gmail.com</a>
            </p>
        </div>
    );
};

export default Call;
