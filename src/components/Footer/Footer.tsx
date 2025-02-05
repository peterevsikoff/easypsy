import "./footer.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="section-tile">
                    {`© ${year > 2025 ? "2025 - " + year : year}`}
                </div>
            </div>
        </footer>
    )
}

export { Footer };