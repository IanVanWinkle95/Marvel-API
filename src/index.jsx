import { useEffect, useState } from "react";

const apiKey = "0950794c1f3aec7b133bcffc5c5044ce"

export function getCharacterById() {
    const [character, setCharacter] = useState([])

    const fetchCharacterData = async () => {
        try {
            const response = await fetch('https://gateway.marvel.com:443/v1/public/characters/')
            const data = await response.json()
            setCharacter(data)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        if (character) {
            fetchCharacterData()
        }
    })
    return character
}