
const ContactUs = () => {

    return (

        <div>
            <h1>Contact us </h1>
            <div className="contact-card">
                <input placeholder="Name" />
                <input placeholder="user@example.com" />
                <input placeholder="Message here..." className="message-input" />

                <button className="send-button">Send</button>
            </div>
        </div>
    );
};

export default ContactUs;