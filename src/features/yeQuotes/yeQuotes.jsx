import React, { useEffect, useState } from "react";
import "../../styles/yeQuotes/main.scss";
import randomButton from "../../images/icon-dice.svg";
import desktopDivider from "../../images/pattern-divider-desktop.svg";
import mobileDivider from "../../images/pattern-divider-mobile.svg";
const apiUrl = "https://api.kanye.rest/";




export function YeQuotes() {
    const [currentQuote, setCurrentQuote] = useState("");

    useEffect(() => {
        getNewQuote();
        console.log(currentQuote);
    },[])

    const getNewQuote = async () => {
        let fetchData;
        fetchData = await fetch(apiUrl);
        let output = await fetchData.json();
        console.log(output);
        setCurrentQuote(output.quote);
    }

    const onClickNewQuoteHandler = () => {
        getNewQuote();
    }

    
    return (
        <div className="quote__container">
            <div className="quote__note">
                <div className="quote__text">{currentQuote}</div>
                <div className="quote__divider">
                    <img src={mobileDivider} className="quote__mobile-divider" />
                    <img src={desktopDivider} className="quote__desktop-divider" />
                </div>
                <div className="quote__button" onClick={() => onClickNewQuoteHandler()}>
                    <img className="quote__img" src={randomButton} alt="new quote button" />
                </div>
            </div>
        </div>
    )
}