import spring from "../../images/About_Page/Spring.jpg"
import summer from "../../images/About_Page/Summer.jpg"
import fall from "../../images/About_page/Fall.jpg"
import winter from "../../images/About_Page/Winter.jpg"
import "./aboutus.css"
import Navbar from "../../Components/Navbar/index.jsx"


const About = () => {
    return (
        <>
        <Navbar></Navbar>
        <header>
            About Us
        </header>
        <main>
            <div className="pictures">
            <img className="Spring" placeholder="Spring" src={spring} alt="Spring_Img" width="90" height="120"/>
            <img className="Summer" placeholder="Summer" src={summer} alt="Summer_Img" width="90" height="120"/>
            <img className="Fall" placeholder="Fall" src={fall} alt="Fall_Img" width="90" height="120"/>
            <img className="Winter" placeholder="Winter" src={winter} alt="Winter_Img" width="90" height="120"/>
            </div>
        </main>
        <div className="words">
            <p>Welcome to SeventyShades, your go-to platform for sharing, discovering, and drawing inspiration from outfits that perfectly match your personal color season!</p>

            <p>At SeventyShades, we believe that personal style should be a reflection of who you truly are, and that starts with understanding your unique color palette.
            Whether you're a cool Winter, warm Autumn, vibrant Spring, or soft Summer, your seasonal color plays a key role in enhancing your natural beauty. That's why we've
            created a space where people can post their outfits according to their personal color season, making it easy for others with similar palettes to find inspiration.
            Our platform allows you to explore an endless variety of looks and ideas, curated by real people with your personal color season in mind. Whether you're looking for everyday wear,
            special occasion outfits, or the latest seasonal trends, SeventyShades helps you embrace your best self through color.</p>

            <p>Join our community of fashion enthusiasts who are passionate about creating looks that complement their personal shades. Share your outfits, connect with like-minded individuals,
            and discover new styles that bring out the best in your natural tones.</p>

            <p>SeventyShades where fashion meets personal color, and where your shades inspire others!</p>
        </div>
        </>
    )
}

export default About;