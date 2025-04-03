import React, { useState } from 'react';
import ins2 from '../assets/insulations/ins2.png';
import ins3 from '../assets/insulations/ins3.png';
import ins4 from '../assets/insulations/ins4.png';
import ins5 from '../assets/insulations/ins5.png';
import ins6 from '../assets/insulations/ins6.png';

function Lv3() {
  let [Noins, setNoins] = useState(2);

  let ChangeIns = (sign) => {
    switch (sign) {
      case '+':
        if (Noins == 6) {
          break;
        }
        setNoins(Noins + 1);
        break;
      case '-':
        if (Noins == 2) {
          break;
        }
        setNoins(Noins - 1);
        break;
      default:
        break;
    }
    console.log(Noins);
  };

  return (
    <center><h1>Lv3</h1></center>
    // <>
    //   <div>insulation between layers</div>
    //   <div>
    //     <button onClick={() => ChangeIns('+')}> increase insulation </button>
    //     <button onClick={() => ChangeIns('-')}> decrease insulation </button>
    //   </div>
    //   {Noins == 2 && (
    //     <img src={ins2} alt="ins 2 missed missed" />      )}
    //   {Noins == 3 && (
    //     <img src={ins3} alt="ins 3 missed missed" />
    //   )}
    //   {Noins == 4 && (
    //     <img src={ins4} alt="ins 4 missed missed" />
    //   )}
    //   {Noins == 5 && (
    //     <img src={ins5} alt="ins 5 missed missed" />
    //   )}
    //   {Noins == 6 && (
    //     <img src={ins6} alt="ins 6 missed missed" />
    //   )}
    // </>
  );
}
export default Lv3;
