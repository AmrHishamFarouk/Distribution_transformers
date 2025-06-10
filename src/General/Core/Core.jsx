import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from '../../database/specsSlice';
import Quickcore from './Quickcore';
import Detailedcore from './Detailedcore';
import { setGeneral, selectGeneral} from '../../database/generalSlice';
import { setLV, selectLV } from '../../database/lvSlice';
import './../../CSS/General/Core.css'
function Core(){
    const dispatch = useDispatch();

    let [simpleCore, setsimpleCore] = useState(true);
    
    
const Csacore =  useSelector((state) => selectGeneral(state, 'Csacore'));
const Sticks =  useSelector((state) => selectGeneral(state, 'Sticks'));
const Cyl =  useSelector((state) => selectGeneral(state, 'Cyl'));
const Tums =  useSelector((state) => selectGeneral(state, 'Tums'));
const W1 =  useSelector((state) => selectGeneral(state, 'W1'));
const Inssteel =  useSelector((state) => selectGeneral(state, 'Inssteel'));
const Totalstacking =  useSelector((state) => selectGeneral(state, 'Totalstacking'));


  useEffect(() => {
    const Фinternalradial = W1 + (2*Sticks) +(2*Cyl)+(2*2*Tums)
    dispatch(setLV({ key: 'Фinternalradial', value: Фinternalradial}));
  }, [W1]);

  useEffect(() => {
    const Фinternalaxial = Totalstacking + Sticks +(2*1.35)+(((2*Cyl)+ (2*Inssteel) + (6*0.35)  +(2*2*Tums))*1.035);
    dispatch(setLV({ key: 'Фinternalaxial', value: Фinternalaxial}));
  }, [Totalstacking]);

  const Фinternalradial =  useSelector((state) => selectGeneral(state, 'Фinternalradial'));
const Фinternalaxial =  useSelector((state) => selectGeneral(state, 'Фinternalaxial'));

    return(
    <>
<div className="core-toggle">
  <button onClick={() => setsimpleCore(true)}>Simple Core</button>
  <button onClick={() => setsimpleCore(false)}>Detailed Core</button>
</div>

{simpleCore === true && <Quickcore />}
{simpleCore === false && <Detailedcore />}

    </>
    )
}
export default Core;




