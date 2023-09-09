import CardFeature from '../Card-feature/CardFeature';
import money from './../../../assets/img/icon-money.png';
import chat from '../../../assets/img/icon-chat.png';
import security from '../../../assets/img/icon-security.png';
import './Features.css';

function Features() {
    const data = [
        {
            id: 1,
            img: money,
            title: "You are our #1 priority",
            description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            id: 2,
            img: chat,
            title: "More savings means higher rates",
            description: "The more you save with us, the higher your interest rate will be!"
        },
        {
            id: 3,
            img: security,
            title: "Security you can trust",
            description: "We use top of the line encryption to make sure your data and money is always safe."
        }

    ]
    return <section className="features">
    <h2 className="sr-only">Features</h2>
        {data.map(item => 
            <CardFeature key={item.id} feature={item} />
        )}
    </section>
}

export default Features