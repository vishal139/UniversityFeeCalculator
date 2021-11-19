import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import data from '../../src/data.json'
import Courses from './Courses';

const Application = () => {
    const [disabled, setdisabled] = useState('')
    const arr = Object.keys(data['Application Fee']);
    const [Nation, setNation] = useState('')

    const handleClick =(e)=>{
        setNation(e.target.text);
        setdisabled('disabled');
    }
    const reset = () =>{
        setNation('');
        setdisabled('');
    }
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <h2 className='text-center'> Application fee </h2>
                    <button type="button" class="btn btn-secondary btn-sm" onClick={reset}>Reset All</button>
                </div>
                <div className="dropdown my-3">
                    <button className="btn btn-secondary dropdown-toggle" disabled={disabled} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Nationality
                    </button>
                    <button type="button" class="btn btn-secondary btn-md mx-1"onClick={reset}>Reset</button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            arr.map((element)=>{
                                return(
                                        <li key={element}><Link className="dropdown-item" to="/" onClick={handleClick}>{element}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                {Nation&&<Courses Nation = {Nation}/>}
            </div>
        </>
    )
}

export default Application
