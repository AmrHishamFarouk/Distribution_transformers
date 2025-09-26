import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from '../../database/hvSlice';

function Masses(){
      const dispatch = useDispatch();

    const Wiretypehv = useSelector((state) => selectHV(state, 'Wiretypehv'));
    const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
    const Turnshv = useSelector((state) => selectHV(state, 'Turnshv'));
    const Csahv = useSelector((state) => selectHV(state, 'Csahv'));
    const Wirethicknesshv = useSelector((state) => selectHV(state, 'Wirethicknesshv'));
    const Wirelengthhv = useSelector((state) => selectHV(state, 'Wirelengthhv'));
    const WireInsulation = useSelector((state) => selectHV(state, 'WireInsulation'));
    const Dinner = useSelector((state) => selectHV(state, 'Dinner'));
    const Douter = useSelector((state) => selectHV(state, 'Douter'));
    const Coppermasshv = useSelector((state) => selectHV(state, 'Coppermasshv'));
useEffect(() => {

    if(Wiretypehv== 'Flat'){
        let Insulationhv = ((((Wirethicknesshv+Wirelengthhv)/(Wirethicknesshv*Wirelengthhv))*WireInsulation)/8.9);
        dispatch(setHV({ key: 'Insulationhv', value: Insulationhv }));
        let singlephaseCoppermasshv = (22/7)*Dmeanhv*Turnshv[0]*0.001*Csahv*8.9*0.001*(Insulationhv+1)*1.005;
        let coppermass = 3*singlephaseCoppermasshv;
        dispatch(setHV({ key: 'Coppermasshv', value: coppermass }));
    }
    else if(Wiretypehv== 'Round'){
        let Insulationhv = (((22/7)*Dinner*0.5)/Csahv)*((Douter-Dinner)/8.9);
        dispatch(setHV({ key: 'Insulationhv', value: Insulationhv }));
        
        let singlephaseCoppermasshv = (22/7)*Dmeanhv*Turnshv[0]*0.001*Csahv*8.9*0.001*(Insulationhv+1)*1.025;
        let coppermass = 3*singlephaseCoppermasshv;
        dispatch(setHV({ key: 'Coppermasshv', value: coppermass }));
    }
    
}, [Dmeanhv]); 
    return(<h3>Coppermasslv= {Coppermasshv}</h3>);
}
export default Masses;