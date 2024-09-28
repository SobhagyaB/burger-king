import React,{Component} from "react";

// export default class Topdisplay extends Component{
//     render(){
//         return(
//             <>
//             <br /><br />
//             <div className="fourdiv">
//                 <div className="innerdiv1">
                    
//                     <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1e0094d5b8e3283dfa1aec982b42a0d45387642e-2000x1000.png?w=812&q=80&fit=max&auto=format" alt="burger1" /><br />
//                     <h1 className="shift">7 days. 7 delicious deals.</h1><br />
//                     <p className="shift">Welcome to Perks Week! A whole week of can’t-miss perks for our loyal members. Tasty deals <br /> drop every day, now through 9/22.</p><br />
//                     <p className="shift"><u>See Terms</u></p>
//                     <button id="dealbtn">View deals</button><br /><br /><br />
//                 </div>
//                 <div className="innerdiv2">
                    
//                     <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/954d8644738ea5fd14d6beeddf6912f238047c71-2000x1000.png?w=812&q=80&fit=max&auto=format" alt="burger2" /><br />
//                     <h1 className="shift2">BK® and Walmart+ go better together</h1><br />
//                     <p className="shift2">Unlock even more tasty savings by linking your Royal Perks account with your Walmart+ membership.</p><br />
//                     <p className="shift2"><u>See Terms</u></p>
//                     <button id="dealbtn2">Learn more</button><br /><br /><br />
//                 </div>

//                 <div className="innerdiv3">
                    
//                     <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4d032a8ba01405c41eed8237c11bcd91ec2d9556-2000x1000.png?w=812&q=80&fit=max&auto=format" alt="burger3" /><br />
//                     <h1 className="shift3">The coolest drop of the season.</h1><br />
//                     <p className="shift3">Tried our naturally flavored Frozen Pink Lemonade yet? Icy, tangy and refreshingly bold—get yours now. Available for a limited time only!</p><br />
//                     <button id="dealbtn3">Order Now</button><br /><br /><br />
//                 </div>

//                 <div className="innerdiv4">
                    
//                     <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/7119e8836c4564f1b32d1b816ccfac811cba3c0d-2000x1000.png?w=812&q=80&fit=max&auto=format" alt="burger4" /><br />
//                     <h1 className="shift4">FREE King Jr.™ Meal with a $20+ purchase</h1><br />
//                     <p className="shift4">Transform your next BK® visit with a FREE King Jr.™ Meal when you make a $20+ purchase! Comes with one of six exclusive Transformers One toys.</p><br />
//                     <p className="shift4"><u>See Terms</u></p>
//                     <button id="dealbtn4">Order Now</button><br /><br /><br />
//                 </div>

//             </div><br /><br />
//             </>
//         )
//     }
// }
export default class Carts4 extends Component{
    render(){
        return(
            <div id="main">
                 <div style={{backgroundColor:'white',borderRadius:'20px',position:'relative'}} id="inner">
    
                    <img style={{width:"580px", height:"300px",borderRadius:'20px'}} src={this.props.imgSrc}></img>
                    <h2 style={{marginLeft:'15px',marginTop:'15px'}}>{this.props.heading}</h2>
                    <p style={{width:"560px",marginLeft:'15px',marginTop:'15px'}}> 
                    {this.props.bpara} </p>
                    <p style={{marginLeft:'15px',marginTop:'15px',cursor:'pointer'}}><u>{this.props.term}</u></p> <br /> <br />
                    <button style={{position:'absolute',left:'450px',bottom:'20px'}} id="bbtn">{this.props.btn} </button> <br />

                </div>

            </div>
        )
    }

}
