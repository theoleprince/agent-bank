import './CardFeature.css';

function CardFeature({feature}) {
    return <div className="feature-item">
    <img src={feature.img} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{feature.title}</h3>
    <p>
    {feature.description}
    </p>
  </div>
}

export default CardFeature