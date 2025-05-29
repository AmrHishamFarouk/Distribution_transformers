import React, { useState } from 'react';
import ins2 from '../assets/insulations/ins2.png';
import ins3 from '../assets/insulations/ins3.png';
import ins4 from '../assets/insulations/ins4.png';
import ins5 from '../assets/insulations/ins5.png';
import ins6 from '../assets/insulations/ins6.png';

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';
import { setSpec, selectSpec} from './../database/specsSlice';

function Lv3() {
  const dispatch = useDispatch();
  const InsNo = [2,2.5,3,3.5,4,5,6]

    const vt = useSelector((state) => selectSpec(state, 'VT'));
    const TurnsPerLayer = useSelector((state) => selectLV(state, 'TurnsPerLayer'));
    const WireInsulation = useSelector((state) => selectLV(state, 'WireInsulation'));
    const InsulationPaperThicknesslv = useSelector((state) => selectLV(state, 'InsulationPaperThicknesslv'));


    let mininstemp = (((4*vt*TurnsPerLayer*0.001)/8)-WireInsulation)/InsulationPaperThicknesslv;
    let minins = 0;
    if(mininstemp<2){
      minins = 2;
    }else{
      minins = Math.ceil(mininstemp);

    }

    let gradient =  (4*vt*TurnsPerLayer*0.001)/(WireInsulation+(InsulationPaperThicknesslv*minins));

    dispatch(setLV({ key: 'Glv', value: gradient }));
    const Glv = useSelector((state) => selectLV(state, 'Glv'));

    let gimp =  (20*1.15*0.35)/(InsulationPaperThicknesslv*minins);

    dispatch(setLV({ key: 'Gimplv', value: gimp }));
    const Gimplv = useSelector((state) => selectLV(state, 'Gimplv'));


    dispatch(setLV({ key: 'Noinslv', value: InsNo[(minins-2)] }));
    // const Insulationlv = useSelector((state) => selectLV(state, 'Insulationlv'));    

  let [Noins, setNoins] = useState(2);

  let ChangeIns = (sign) => {
    switch (sign) {
      case '+':
        if (Noins == 9) {
          break;
        }
        setNoins(Noins + 1);
        break;
      case '-':
        if (Noins == 2) {
          break;
        }else{
        setNoins(Noins - 1);

        break;
        }
       
      default:
        break;
    }
    console.log(Noins);
  };

  function updateInsulationThickness(value){
        dispatch(setLV({ key: 'InsulationPaperThicknesslv', value: value }));
  }

  return (
    <>
      <div>insulation between layers</div>
      <div>
        <button onClick={() => ChangeIns('+')}> increase insulation </button>
        <button onClick={() => ChangeIns('-')}> decrease insulation </button>
      </div>
            <div>
              <label>Insulation paper Thickness</label>
              <input name="myInput" placeholder="Thickness" defaultValue= '0.13' onChange={(e) => updateInsulationThickness(parseFloat(e.target.value))}/>
            </div>
      <h1>Glv = {Glv}</h1>
      <h1>Gimplv = {Gimplv}</h1>
      
      {vt} <br/>
    TurnsPerLayer={TurnsPerLayer}<br/> 
    WireInsulation={WireInsulation} <br/>
    InsulationPaperThicknesslv={InsulationPaperThicknesslv}<br/>
      {Noins == 2 && (
        <img src={ins2} alt="ins 2 missed missed" />      )}
      {Noins == 3 && (
        <img src={ins3} alt="ins 3 missed missed" />
      )}
      {Noins == 4 && (
        <img src={ins4} alt="ins 4 missed missed" />
      )}
      {Noins == 5 && (
        <img src={ins5} alt="ins 5 missed missed" />
      )}
      {Noins == 6 && (
        <img src={ins6} alt="ins 6 missed missed" />
      )}
    </>
  );
}
export default Lv3;
