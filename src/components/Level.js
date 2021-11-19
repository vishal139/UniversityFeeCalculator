import React,{useState} from 'react'
import data from '../../src/data.json'
import { Link } from 'react-router-dom';
const Level = (props) => {
    let arr;
    arr = props.Type?'':Object.keys(data['Application Fee'][props.Nation].ALL_COURSES);
    const [Fee, setFee] = useState(0);
    const [major, setmajor] = useState('')


    const handleClick = (e) =>{
        const val = e.target.text;
        setmajor(val);
        const abc = Object.values(data['Application Fee'][props.Nation].ALL_COURSES[val]);
        setFee(abc[0]);
    }

    const handleClick1 = (e) =>{
        const val = e.target.text;
        setmajor(val);
        const abc = Object.values(data['Exam Fee'][props.Nation].ALL_COURSES.ALL_LEVEL);
        setFee(abc[0]);
    }

    const reset = () =>{
        setmajor('');
    }
    return (
        <>
            <div className="container">
            <p>{props.Subject}</p> 
                <div className="dropdown my-3 text-center">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Level
                    </button>
                    <button type="button" class="btn btn-secondary btn-md mx-1"onClick={reset}>Reset</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            props.Type?
                                <>
                                    <li><Link className="dropdown-item" to="/" onClick={handleClick1}>UG</Link></li>
                                    <li><Link className="dropdown-item" to="/" onClick={handleClick1}>PG</Link></li>
                                    <li><Link className="dropdown-item" to="/" onClick={handleClick1}>DIMLOMA</Link></li>
                                    <li><Link className="dropdown-item" to="/" onClick={handleClick1}>Ph.D</Link></li>
                                </>
                            
                            :arr.map((element)=>{
                                return(
                                        <li key={element}><Link className="dropdown-item" to="/" onClick={handleClick}>{element}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="row">
                    {
                        major&&
                        <>
                            <p>{major} level</p>
                            <h3>Your fee : {Fee}</h3>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Level
