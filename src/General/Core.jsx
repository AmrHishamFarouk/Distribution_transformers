import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from './../database/specsSlice';
import Quickcore from './Quickcore';
import Detailedcore from './Detailedcore';
import { setGeneral, selectGeneral} from './../database/generalSlice';

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
    let Фinternalradial = W1 + (2*Sticks) +(2*Cyl)+(2*2*Tums)
    dispatch(setGeneral({ key: 'Фinternalradial', value: Фinternalradial}));
  }, [W1]);

  useEffect(() => {
    let Фinternalaxial = Totalstacking + Sticks +(2*1.35)+(((2*Cyl)+ (2*Inssteel) + (6*0.35)  +(2*2*Tums))*1.035);
    dispatch(setGeneral({ key: 'Фinternalaxial', value: Фinternalaxial}));
  }, [Totalstacking]);

  const Фinternalradial =  useSelector((state) => selectGeneral(state, 'Фinternalradial'));
const Фinternalaxial =  useSelector((state) => selectGeneral(state, 'Фinternalaxial'));

  console.log(Фinternalradial,Фinternalaxial)

    return(
    <>
    <div>
        <button onClick={() => setsimpleCore(true)}> Simple Core </button>
        <button onClick={() => setsimpleCore(false)}> Detailed Core </button>
    </div>
    
    {simpleCore == true && <Quickcore />}
    {simpleCore == false && <Detailedcore />}
    </>
    )
}
export default Core;




