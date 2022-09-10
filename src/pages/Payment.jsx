import React from 'react'
import "./style.css";
import ava from "../assets/ava.png"


export default function Payment() {
  return (
        <>
       {/*Container*/}
       <div className="container d-lg-flex" style={{borderRadius: '15px'}}>
        {/* Box 1 */}
        <div className="box-1 bg-light user" style={{marginTop: '20px'}}> 
        <div className="d-flex align-items-center mb-3">
            <img src={ava} className="pic rounded-circle" alt="avatar" />
            <p className="ps-2 name">User</p>
        </div>
        </div>
        </div>
    </>
  )
}
