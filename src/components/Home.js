import React from 'react'
import Application from './Application'
import Exam from './Exam'
const cardStyle={
    backgroundColor:"#c7ecee",
    boxShadow:'2px 2px 10px 1px #95afc0,-2px -2px 10px 1px #95afc0'

}

const Home = () => {
    return (
        <>
            <div className="container-fluid " style={{backgroundColor:'#dff9fb',height:'100vh'}}>
                <h1 className='text-center'>Fee Section</h1>
                <div className="row d-flex justify-content-around" style={{height:'650px'}}>
                    <div className="col-md-5 my-5" style={cardStyle}>
                        <Application/>
                    </div>
                    <div className="col-md-5 my-5" style={cardStyle}>
                        <Exam/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
