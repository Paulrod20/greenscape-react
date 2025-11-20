import '../styles/Services.css';

function Services() {
    const services = [
        {
            icon: '🌱',
            title: 'Lawn Maintence',
            description: 'Regular mowing, edging, and fertilization to keep your lawn healthy and beautiful.'
        },
        {
            icon: '🌳',
            title: 'Tree & Shrub Care',
            description: 'Professional pruning, trimming, and health assessments for all your trees and shrubs.'
        },
        {
            icon: '🌻',
            title: 'Garden Design',
            description: 'Custom landscape design tailored to your style and the unique features of your property.'
        },
        {
            icon: '💧',
            title: 'Irrigation Cleanup',
            description: 'Spring and fall cleanup services including leaf removal and bed preparation.',
        },
        {
            icon: '🍂',
            title: 'Seasonal Cleanup',
            description: 'Spring and fall cleanup services including leaf removal and bed preparation.'
        },
        {
            icon: '🪨',
            title: 'Hardscaping',
            description: 'Patios, walkways, retaining walls, and other stone or concrete features.'       
        }
    ]




    return(
        <div className="services">
            <h1>Our Services</h1>
            <p className="services-intro">
                Comprehensive landscaping solutions for residential and commercial properties
            </p>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className='service-card'>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;