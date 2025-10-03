import React, { useEffect,useState } from 'react';
import { setGeneral, selectGeneral} from './../database/generalSlice';
import { setSpec, selectSpec } from './../database/specsSlice';
import { useSelector, useDispatch } from 'react-redux';

function Ironcore(){
    const Csacore =  useSelector((state) => selectGeneral(state, 'Csacore'));
    const Maj =  useSelector((state) => selectSpec(state, 'Maj'));
    
    // const massironcorenet = 7.65*0.000001*Csacore*((3*hw)+(4*ew)+(2*largeststep));
    
    // const massironcoregross = massironcorenet*(1+(Maj/100)); 
    
    return(
        <>
        
        </>
    )
}
export default Ironcore;