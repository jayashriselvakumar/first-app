import React, { useState } from "react"
import ChildFunctionComponent from "./ChildFunctionComponent"

const ParentFunctionComponent = () => {
    const [name, setName] = useState('jayashri')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [skills, setSkills] = useState('')
    const handleOnClick = () => {

        setName('jayashri selvakumar');

    }
    const handleChange = (event) => {
        setAddress(event.target.value)
    }
    const handleGender = (event) => {
        setGender(event.target.value)
    }
    const handleSkills = (event) => {
        console.log('function called', event)
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((item)=> item !== event.target.value))
        }

    }
    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={handleOnClick}>Change your name</button><br />
            <h2>My address {address}</h2>
            <input type="text" placeholder="Enter your address" onChange={handleChange} /><br />
            <div onChange={handleGender}>
                <label>Gender </label>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <p>Selected Gender:{gender}</p>
            </div>
            <fieldset onChange={handleSkills}>
                <legend>Select your Skill sets</legend>
                <input type="checkbox" name="skill" value="angluar" />Angular<br />
                <input type="checkbox" name="skill" value="react" />React<br />
                <input type="checkbox" name="skill" value="javascript" />Javascript<br />
                <input type="checkbox" name="skill" value="java" />java
                <p>Selected Skill sets:{skills}</p>

            </fieldset>
            <ChildFunctionComponent />
        </div>
    )
}

export default ParentFunctionComponent