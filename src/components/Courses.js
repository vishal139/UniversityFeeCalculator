import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'

const Courses = (props) => {
    const [Subject, setSubject] = useState('')
    const [disabled, setdisabled] = useState('')
    const handleClick = (e) =>{
        const val = e.target.text;
        setSubject(val);
        setdisabled('disabled');
    }


    const reset = () =>{
        setSubject('');
        setdisabled('');
    }
    return (
        <>
            <div className="container text-center">
            <p>{props.Nation}</p>
                    <div className="dropdown my-3">
                        <button className="btn btn-secondary dropdown-toggle" disabled={disabled} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Course
                        </button>
                        <button type="button" class="btn btn-secondary btn-md mx-1"onClick={reset}>Reset</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/" onClick={handleClick}>Medical</Link></li>
                            <li><Link className="dropdown-item" to="/" onClick={handleClick}>Dental</Link></li>
                            <li><Link className="dropdown-item" to="/" onClick={handleClick}>Ayurveda</Link></li>
                        </ul>
                    </div>
              
              {Subject&&<Level Nation = {props.Nation} Subject ={Subject} Type = {props.Type}/>}
             
            </div>
        </>
    )
}

export default Courses
