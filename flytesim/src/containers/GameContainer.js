import React, {Fragment, useState, useEffect} from 'react';
import StarterWords from '../components/StarterWords'
import RhymeList from '../components/RhymeList'
import RhymeWord from '../components/RhymeWord';

const GameContainer = () => {

    const starterWordsList = ["duck", "tip", "bomb", "grub", "daft", "eat"];
    const [starterWord, setStarterWord] = useState("")
    const [rhymeWord, setRhymeWord] = useState([])
    const [rhymeWordsList, setRhymeWordsList] = useState([])
    const [showRhymes, setShowRhymes] = useState(false)

    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord)
        .then(response => response.json())
        .then(data => setRhymeWordsList(data))
    }, [starterWord]);
    
    const starterWordClicked = (e) => {
        setStarterWord(e.target.value)
        setShowRhymes(true)
    }

    const rhymeWordClicked = (e) => {
        setRhymeWord(e.target.value)
        console.log(rhymeWord)
        // setShowRhymes(false)
    }

    return(
        <>
        <StarterWords starterWordsList={starterWordsList} starterWordClicked={starterWordClicked}/>
        <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showRhymes={showRhymes}/>
        </>
    )

}

export default GameContainer;