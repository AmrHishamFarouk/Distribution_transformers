import React, { useEffect,useState } from 'react';
import { setGeneral, selectGeneral} from './../database/generalSlice';
import { setSpec, selectSpec } from './../database/specsSlice';
import { setHV, selectHV } from './../database/hvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Ironcore(){
    const Csacore =  useSelector((state) => selectGeneral(state, 'Csacore'));
    const Maj =  useSelector((state) => selectSpec(state, 'Maj'));
    const Фexternalradialhv = useSelector((state) => selectHV(state, 'Фexternalradial'));
    const Hmechhv = useSelector((state) => selectHV(state, 'Hmechhv'));
    const Ew =  useSelector((state) => selectGeneral(state, 'Ew'));
    const Hw =  useSelector((state) => selectGeneral(state, 'Hw'));
    const B = useSelector((state) => selectSpec(state, 'B'));

    function updateEw(Ew){
        dispatch(setGeneral({ key: 'Ew', value: Ew }));
    }
    function updateEw(Hw){
        dispatch(setGeneral({ key: 'Hw', value: Hw }));
    }

    useEffect(() => {
    const massironcorenet = 7.65*0.000001*Csacore*((3*Hw)+(4*Ew)+(2*largeststep));

    const massironcoregross = massironcorenet*(1+(Maj/100));
    
    const Po = (((Math.pow(B,4.2))+2.565)/6.7)*factor*massironcorenet;

    Iomax = Po/reating;

    Io = Iomax * 0.7;

    
    }, [Ew,Hw]);
    
    return(
    <>
      <div>
        <label>Ew</label>
        <input name="myInput" placeholder="layers" onChange={(e) => updateEw(parseFloat(e.target.value))} value={Nph}/>
      </div>
      <div>
        <label>Hw</label>
        <input name="myInput" placeholder="layers" onChange={(e) => updateHw(parseFloat(e.target.value))} value={Nph}/>
      </div>              
    </>
    )
}
export default Ironcore;