import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../database/hvSlice';
import { setHilo, selectHilo } from './../database/hiloSlice';

import { setSpec, selectSpec} from './../database/specsSlice';
import Power from './POWERS/Power';
import Masses from './MASSES/Masses';

function Hv5(){
    const dispatch = useDispatch();

    const Layershv = useSelector((state) => selectHV(state, 'Layershv'));
    const Turnthicknesshv = useSelector((state) => selectHV(state, 'Turnthicknesshv'));
    const InsulationPaperThicknesshv = useSelector((state) => selectHV(state, 'InsulationPaperThicknesshv'));
    const Nocollingducthv = useSelector((state) => selectHV(state, 'Nocollingducthv'));
    const Coolingductthicknesshv = useSelector((state) => selectHV(state, 'Coolingductthicknesshv'));
    const Wiretypehv = useSelector((state) => selectHV(state, 'Wiretypehv'));
    const Wirealignmenthv = useSelector((state) => selectHV(state, 'Wirealignmenthv'));
    const Noinshv = useSelector((state) => selectHV(state, 'Noinshv'));
    const Фinternalradial = useSelector((state) => selectHilo(state, 'Radialexternalhilo'));
    const Фinternalaxial = useSelector((state) => selectHilo(state, 'Axialexternalhilo'));
    const Thickaxialhv = useSelector((state) => selectHV(state, 'Thickaxialhv'));
    const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
    const Dmhv = useSelector((state) => selectHV(state, 'Dmhv'));


    let thickradial = ((Layershv*Turnthicknesshv)+(Layershv*Noinshv*InsulationPaperThicknesshv)+(Nocollingducthv*Coolingductthicknesshv))*1.035;
    let Thickaxial = thickradial;
    dispatch(setHV({ key: 'Thickradialhv', value: thickradial }));
    dispatch(setHV({ key: 'Thickaxialhv', value: Thickaxial }));


let Фexternalradial = Фinternalradial + (2*thickradial);
let Фexternalaxial =  Фinternalaxial + (2*Thickaxialhv);
useEffect(() => {
     dispatch(setHV({ key: 'Фexternalradial', value: Фexternalradial }));
     dispatch(setHV({ key: 'Фexternalaxial', value: Фexternalaxial }));

        let a = ( Фexternalaxial - Thickaxialhv )/2;
        let b = ( Фexternalradial - thickradial )/2;
        const sum = a + b;
  const diff = a - b;
  const diffSquared = Math.pow(diff, 2);
  const sumSquared = Math.pow(sum, 2);

  const sqrtPart = Math.sqrt(((-3 * diffSquared) / sumSquared) + 4);
  const denominator = (sumSquared * sqrtPart) + 10;
  const result = sum * ((3 * diffSquared) / denominator + 1);
        dispatch(setHV({ key: 'Dmeanhv', value: result }));
        }, [Фexternalradial, Фexternalaxial]); 



 useEffect(() => {
    let Dmhv = Фinternalradial + thickradial;
    dispatch(setHV({ key: 'Dmlv', value: Dmhv }));
       }, [Фinternalradial, thickradial]); 

    return( 
        <>
        <h1>Thickness LV</h1>

    <div>
        <strong>Radial LV: {thickradial}</strong>
    </div>

     <div>
        <strong>Axial LV: { Thickaxialhv }</strong>
    </div>
     <div>
         <p>Φ LV = {Фinternalradial}/{Фinternalaxial} Ξ {Фexternalradial} /{Фexternalaxial}</p>
    </div>

    <div>
        <p>Dmean = {Dmeanhv} </p>
    </div>

     <div>
     <strong>For Ux:</strong>
     <p>Dmlv = {Dmhv}</p>
     </div>
   </>
    )
}
export default Hv5;