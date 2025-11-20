import '../styles/Gallery.css';

function Gallery() {
        const projects = [
            { id: 1, title: 'Modern Backyard Oasis', color: '#4a7c2c' },
            { id: 2, title: 'Front Yard Transformation', color: '#5d9b3a' },
            { id: 3, title: 'Commercial Landscape', color: '#2d5016' },
            { id: 4, title: 'Garden Paradise', color: '#6bb347' },
            { id: 5, title: 'Patio & Stone Work', color: '#7db35c' },
            { id: 6, title: 'Seasonal Flower Beds', color: '#8fb86f' },
        ]

        return (
            <div className="gallery">
                <h1>Project Gallery</h1>
                <p className='gallery-intro'>
                    Take a look at some of our recent landscaping projects
                </p>

                <div className="gallery-grid">
                    {projects.map((project) => (
                        <div key={project.id} className='gallery-item' style={{ backgroundColor: project.color}}>
                            <div className="gallery-overlay">
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default Gallery;