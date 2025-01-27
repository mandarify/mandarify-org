import Lottie from "lottie-react";

import logoLottie from "../shared/lotties/logo.json";


function App() {
   return (
      <div className="app">
         <div className="app-container">

            <main className="main">

               <div id="logo" className="logo">
                  <Lottie
                     animationData={logoLottie}
                     loop={true}
                     className="logo-box"
                  />
               </div>
               <h1 className="webtitle">MANDARIFY</h1>

            </main>

         </div>
      </div>
   )
}

export default App;
