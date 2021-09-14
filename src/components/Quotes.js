import React, { useEffect, useState } from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState('');


    useEffect(() => {
        const fetchQuote = async () => {
            await fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((data) =>
                    setQuote(data[Math.floor(Math.random() * (data.length - 1))])
                );
        };
        fetchQuote();
    }, []);
    return (
        <center>
            <div className="quote">
                <i className="quote__text">{quote.text}</i>
                <p className="quote__author">{quote.author}</p>
            </div>
        </center>
    );
}

export default Quotes;
