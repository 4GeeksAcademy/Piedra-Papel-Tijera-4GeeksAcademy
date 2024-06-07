import React, { useEffect, useState } from "react";


export const GameType = ({ won, lost, type, selectType, winner }) => {

    const [points, setPoints] = useState(3)

    const handleChange = (e) => {
        e.target.value === 'bestOfThree' ? setPoints(prev => prev = 3) : setPoints(prev => prev = 5)
        selectType(e.target.value)
    }

    useEffect(() => {
        if (won === points || lost === points) {
            alert(`We have a winner! ${won === points ? 'You are the winner!' : 'Better luck next time'} `)
            winner()
        }
    }, [won, lost])

    return (
        <section className="mt-5">
            <form className="form-control w-50 mx-auto">
                <h3 className="my-3">Choose your flavor:</h3>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" defaultChecked type="radio" name="inlineRadioOptions" id="inlineRadio1" value="bestOfThree" onChange={handleChange} />
                    <label className="form-check-label" for="inlineRadio1">Best of Three</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="bestOfFive" onChange={handleChange} />
                    <label className="form-check-label" for="inlineRadio2">Best of Five</label>
                </div>
            </form>
        </section>
    )
}