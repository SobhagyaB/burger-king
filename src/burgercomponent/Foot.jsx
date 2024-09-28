import React,{Component} from "react"

export default class Foot extends Component{
    render(){
        return(
            <>
            <br /><br /><br /><br />
            <ul id="footer">
                <li><i class="fa-solid fa-house"></i> <br /> Home</li>
                <li><i class="fa-solid fa-bars"></i> <br />Menu</li>
                <li><i class="fa-solid fa-tag"></i> <br />Offers</li>
                <li><i class="fa-solid fa-crown"></i> <br />Rewards</li>
            </ul>
            </>
            
        )
    }
}