import React, { useState } from 'react';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';

import ins2 from '../assets/insulations/ins2.png';
import ins3 from '../assets/insulations/ins3.png';
import ins4 from '../assets/insulations/ins4.png';
import ins5 from '../assets/insulations/ins5.png';
import ins6 from '../assets/insulations/ins6.png';

function Hv3() {
//   const [minNopack, setminNopack] = useState(null);
//   setminNopack(parseInt('n-10%'));

//   const [Nopack, setNopack] = useState(minNopack);
  

//   let Changepack = (sign) => {
//     if (sign === '+' && Nopack < 6) {
//       setNopack(Nopack + 1);
//     } else if (sign === '-' && Nopack > minNopack) {
//       setNopack(Nopack - 1);
//     }
//   };


//   // insulation equations

// let [Noins, setNoins] = useState(2);
  
//     let ChangeIns = (sign) => {
//       switch (sign) {
//         case '+':
//           if (Noins == 6) {
//             break;
//           }
//           setNoins(Noins + 1);
//           break;
//         case '-':
//           if (Noins == 2) {
//             break;
//           }
//           setNoins(Noins - 1);
//           break;
//         default:
//           break;
//       }
//       console.log(Noins);
//     };

  return (
    <center><h1>Hv3</h1></center>

//     <>
//     <div>
//          <div> n= 100/ (δ^2)*thicknessofwire = = parseInt(n)</div>
//       <div> n-10%= 100/ (δ-10%^2)*thicknessofwire = = parseInt(n)</div>

//       {Nopack == 2 && <Packets2 />}
//       {Nopack == 3 && <Packets3 />}
//       {Nopack == 4 && <Packets4 />}
//       <div>
//         <button onClick={() => Changepack('+')}> increase insulation </button>
//         <button onClick={() => Changepack('-')}> decrease insulation </button>
//       </div>   
//     </div>

// {/* insulation section */}
//     <div>
//       <div>insulation between layers</div>
//             <div>
//               <button onClick={() => ChangeIns('+')}> increase insulation </button>
//               <button onClick={() => ChangeIns('-')}> decrease insulation </button>
//             </div>
//             {Noins == 2 && (
//               <img src={ins2} alt="ins 2 missed missed" />      )}
//             {Noins == 3 && (
//               <img src={ins3} alt="ins 3 missed missed" />
//             )}
//             {Noins == 4 && (
//               <img src={ins4} alt="ins 4 missed missed" />
//             )}
//             {Noins == 5 && (
//               <img src={ins5} alt="ins 5 missed missed" />
//             )}
//             {Noins == 6 && (
//               <img src={ins6} alt="ins 6 missed missed" />
//             )}
//     </div>
//     </>
  );
}
export default Hv3;