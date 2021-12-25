import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {



    const [text, setText] = useState('');
    // text="New Text" ;  wrong way to change the text
    // setText("New Text") ;  correct way to change the text


    function handleUP() {
        console.log("Ohh, so you want everything in uppercase. Very good !!!");
        // setText("Ohh, so you want everything in uppercase. Very good !!!") ;
        let temp = text;
        temp = temp.toUpperCase();
        setText(temp);
    }

    function handleDOWN() {
        console.log("Ohh, so you want everything in lowercase. Very good !!!");
        // setText("Ohh, so you want everything in uppercase. Very good !!!") ;
        let temp = text;
        temp = temp.toLowerCase();
        setText(temp);
    }
    function clearText() {
        setText("");
        document.getElementById("num-letter").innerHTML = 0;
        document.getElementById("num-word").innerHTML = 0;
        document.getElementById("num-sentence").innerHTML = 0;
        document.getElementById("num-read").innerHTML = 0;
    }
    function copyText()
    {
        navigator.clipboard.writeText(text) ; 
    }

    function changeTextInfo() {
        // console.log(document.getElementById("num-word").innerHTML ) ;
        let letter = 0;
        let word = 0;
        let sentence = 0;
        let temp = text;

        // number of letters
        for (let i = 0; i < temp.length; i++) {
            letter++;
        }

        // number of words
        temp = text;
        word = temp.split(' ')
            .filter(function (n) { return n != '' })
            .length;


        // number of sentences
        temp = text;
        temp = temp + " ";
        sentence = temp.split(". ").length - 1;

        // console.log(letter) ; 
        // console.log(word);
        // console.log(sentence);

        // console.log( document.getElementById("num-letter") ) ;

        let time = 0.008 * word;
        time = (Math.round(time * 100) / 100).toFixed(2);

        document.getElementById("num-letter").innerHTML = letter;
        document.getElementById("num-word").innerHTML = word;
        document.getElementById("num-sentence").innerHTML = sentence;
        document.getElementById("num-read").innerHTML = time ;
    }

    // through this function, we can type in the box and get the value of text editted
    function onChangeText(event) {
        setText(event.target.value);
        changeTextInfo();
    }

    function extraSpaces()
    {
        let temp=text.replace(/\s+/g,' ').trim(); ;
        setText(temp) ;
        changeTextInfo() ;
    }



    return (
        <div>
            <div className="mb-3">
                <textarea id="myBox" rows="8" className="form-control" value={text} onChange={onChangeText}  ></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={extraSpaces} >Remove extra spaces</button>
            <button className="btn btn-primary mx-3" onClick={handleUP} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleDOWN} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={clearText} >Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={copyText} >Copy Text</button>

            <br /><br />



            <ul className="list-group">
                <h3>Text Statistics are as follows:- </h3>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Number of letters
                    <span className="badge badge-primary badge-pill" id="num-letter">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Number of words
                    <span className="badge badge-primary badge-pill" id="num-word">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Number of sentences
                    <span className="badge badge-primary badge-pill" id="num-sentence">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Average reading time in minutes
                    <span className="badge badge-primary badge-pill" id="num-read">0</span>
                </li>
            </ul>

            <br />
            <div className="in-center">
                <h2 class="heading"><u>Preview</u></h2>
                <br />
            </div>
            {text}

        </div>
    )
}