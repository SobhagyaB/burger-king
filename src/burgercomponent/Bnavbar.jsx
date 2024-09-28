import React,{Component} from "react";

export default class Bnavbar extends Component{
    render(){
        return(
            <>
            <div className="navbar">
                <div className="threeline">
                <i class="fa-solid fa-bars"></i>
                </div>
                <div className="logoname">
                    <h1>Burger King</h1>
                </div>
                <div className="btn" style={{width:'150px',display:'flex',justifyContent:'space-evenly'}}>
                <i id="user" style={{marginTop:'6px'}} class="fa-solid fa-user"></i>
                    <button id="btn1" style={{color:" rgb(235, 226, 211,1)",fontWeight:'bold'}}>View Cart</button>
                </div>
            </div> 
            </>
        )
    }
}