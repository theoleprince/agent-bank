import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import './Home.css';

function Home() {
    return <div>
        <Banner />
        <main>
        <Features />
        </main>
        <Footer />
    </div>
}

export default Home