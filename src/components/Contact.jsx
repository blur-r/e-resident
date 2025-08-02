function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>We are here to provide you support with a quick solution to any problem you encounter.</p>
            <form action="">
                <div className="email field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="message field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Contact