import React, { useEffect,useState } from 'react';
import ins2 from '../assets/insulations/ins2.png';
import ins3 from '../assets/insulations/ins3.png';
import ins4 from '../assets/insulations/ins4.png';
import ins5 from '../assets/insulations/ins5.jpeg';
import ins6 from '../assets/insulations/ins6.png';

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../database/hvSlice';
import { setSpec, selectSpec} from './../database/specsSlice';

function Hv3() {
  const dispatch = useDispatch();
  const InsNo = [2,2.5,3,3.5,4,5,6]

    const vt = useSelector((state) => selectSpec(state, 'VT'));
    const HV = useSelector((state) => selectSpec(state, 'HV'));
    const TurnsPerLayer = useSelector((state) => selectHV(state, 'TurnsPerLayerhv'));
    const WireInsulation = useSelector((state) => selectHV(state, 'WireInsulation'));
    const InsulationPaperThicknesshv = useSelector((state) => selectHV(state, 'InsulationPaperThicknesshv'));
    const Glv = useSelector((state) => selectHV(state, 'Ghv'));
    const Gimplv = useSelector((state) => selectHV(state, 'Gimphv'));

    let mininstemp = (((4*vt*TurnsPerLayer*0.001)/8)-WireInsulation)/InsulationPaperThicknesshv;
    let minins = 0;
    if(mininstemp<2){
      minins = 2;
    }else{
      minins = Math.ceil(mininstemp);
    }

  useEffect(() => {
    let gradient =  (4*vt*TurnsPerLayer*0.001)/(WireInsulation+(InsulationPaperThicknesshv*minins));
    const denomenator = (WireInsulation+(InsulationPaperThicknesshv*minins));
    if(HV<12){
          let gimp =  (75*1.15*0.4)/denomenator;
          console.log(InsulationPaperThicknesshv,minins,WireInsulation)
          dispatch(setHV({ key: 'Gimphv', value: gimp }));
    }else{
          let gimp =  (125*1.15*0.4)/denomenator;
          dispatch(setHV({ key: 'Gimphv', value: gimp }));      
    }
    dispatch(setHV({ key: 'Ghv', value: gradient }));
    dispatch(setHV({ key: 'Noinshv', value: InsNo[(minins-2)] }));
    // const Insulationlv = useSelector((state) => selectHV(state, 'Insulationlv'));    
  }, [InsulationPaperThicknesshv]);    

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
        dispatch(setHV({ key: 'InsulationPaperThicknesshv', value: value }));
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
    WireInsulation = {WireInsulation} {WireInsulation === 0 && "because it is foil"}<br />
    InsulationPaperThicknesshv={InsulationPaperThicknesshv}<br/>
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
export default Hv3;
