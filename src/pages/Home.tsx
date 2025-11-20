import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Transfor Your Outdoor Space</h1>
                <p>Professional landscaping services for your home or business</p>
                <button className="cta-button">Get a Free Quote</button>
            </section>

            <section className="intro">
                <h2>Welcome to GreenScape</h2>
                <p>With over 10 years of experience, we bring your outdoor vision to life.
                    From lawn maintainence to complete landscape design, we've got you covered. 
                </p>
            </section>

            <section className="features">
                <div className="feature">
                    <div className="feature-icon">✓</div>
                    <h3>Licensed & Insured</h3>
                    <p>Fully certified professionals you can trust</p>
                </div>
                    <div className="feature">
                        <div className="feature-icon">⭐</div>
                        <h3>Quality Guranteed</h3>
                        <p>We stand behind every project we complete</p>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Get Started?</h2>
                <p>Contact us today for a free consultation and quote</p>
                <button className="cta-button-secondary">Contact Us</button>
            </section>
        </div>
    );
}

export default Home;