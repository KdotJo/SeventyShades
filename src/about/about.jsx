import React from 'react';
import './about.css';

export function About(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  return (
    <main className='container'>
      <div className='everything-about'>
        
        </div>
            <p className='description'>Welcome to SeventyShades, your go-to platform for sharing, discovering, and drawing inspiration from outfits that perfectly match your personal color season!</p>

            <p>At SeventyShades, we believe that personal style should be a reflection of who you truly are, and that starts with understanding your unique color palette.
            Whether you're a cool Winter, warm Autumn, vibrant Spring, or soft Summer, your seasonal color plays a key role in enhancing your natural beauty. That's why we've
            created a space where people can post their outfits according to their personal color season, making it easy for others with similar palettes to find inspiration.
            Our platform allows you to explore an endless variety of looks and ideas, curated by real people with your personal color season in mind. Whether you're looking for everyday wear,
            special occasion outfits, or the latest seasonal trends, SeventyShades helps you embrace your best self through color.</p>

            <p>Join our community of fashion enthusiasts who are passionate about creating looks that complement their personal shades. Share your outfits, connect with like-minded individuals,
            and discover new styles that bring out the best in your natural tones.</p>

            <p>SeventyShades where fashion meets personal color, and where your shades inspire others!</p>

            <p>We hope that you continue to inspire yourselves to continue on this wonderful journey of fashion
              as such please have a inspirational quote on your way out!
            </p>

        <div className='quote-box'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
  );
}
