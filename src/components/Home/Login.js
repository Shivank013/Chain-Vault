// import React, { useEffect, useState } from 'react';
// import "@passageidentity/passage-elements/passage-auth";
// import pic from "../../assets/login_bg.jpg";
// import MetamaskWarning from './MetamaskWarning';

// const { ethers } = require('ethers')

// function Login() {

//   const [flag, SetFlag] = useState();

//   useEffect(() => {
//     try{
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       console.log(provider);
//       SetFlag(true);
//     } catch (error){
//       console.log(error);
//       SetFlag(false);
//     }
//   },[]);

//   return (   
//     <div className='w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
//     {
//       flag ? (null) : (<MetamaskWarning/>)
//     }
//     <passage-auth app-id="sQWkD22Sfvwd110FDImSuaau"></passage-auth>
//     </div>
//   );
// }

// export default Login;



import React from 'react';
import "@passageidentity/passage-elements/passage-auth";
import pic from "../../assets/login_bg.jpg";

function Login() {
  return (
    
    <div className='w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
      <passage-auth app-id="sQWkD22Sfvwd110FDImSuaau"></passage-auth>
    </div>
  );
}

export default Login;