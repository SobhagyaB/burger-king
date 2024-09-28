
// import './App.css';
// import Navbar from './Component/Navbar';
// import Image from './Component/Image';
// import Newcart from './Component/Newcart'

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Hello World</h1> */}
//       <Navbar/>
//       <Image/>
//       <Newcart/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import './burgercomponent/Bnavbar'
import Bnavbar from './burgercomponent/Bnavbar';
import Topdisplay from './burgercomponent/Topdisplay';
import Carts4 from './burgercomponent/Carts4';
import Bottom from './burgercomponent/Bottom';
import Foot from './burgercomponent/Foot'
import arrdata from './burgercomponent/Cartdatas'

// import Navbar from './Component/Navbar';
// import Image from './Component/Image';
// import Newcart from './Component/Newcart'

function App() {
  return (
    <div className="App">
      <Bnavbar/>
      <Topdisplay/>
      <div style={{display:'flex',flexWrap:'wrap',marginLeft:"140px",gap:'30px'}}>
      {arrdata.map(x=>{
        return(
          <>
          <Carts4 imgSrc={x.imgSrc} heading={x.heading} bpara={x.bpara} term={x.term} btn={x.btn}/>
          {/* <img src={image}></img> */}
          </>
          
        )
      })}
      
    </div>

      <Bottom/>
      <Foot/>
    </div>
  );
}

export default App;
