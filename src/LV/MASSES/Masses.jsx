import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from '../../database/lvSlice';

function Masses(){
      const dispatch = useDispatch();

    const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));
    const Фinternalradial = useSelector((state) => selectLV(state, 'Фinternalradial'));
    const Dmeanlv = useSelector((state) => selectLV(state, 'Dmeanlv'));
    const Dmlv = useSelector((state) => selectLV(state, 'Dmlv'));
    const Nph = useSelector((state) => selectLV(state, 'Nph'));
    const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
    const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const WireInsulation = useSelector((state) => selectLV(state, 'WireInsulation'));
    const Dinner = useSelector((state) => selectLV(state, 'Dinner'));
    const Douter = useSelector((state) => selectLV(state, 'Douter'));
    const Coppermasslv = useSelector((state) => selectLV(state, 'Coppermasslv'));

 console.log(useSelector((state) => state.lv))

 useEffect(() => {

    if(Wiretypelv== 'Foil'){
        let singlephaseCoppermasslv = (22/7)*Dmeanlv*Nph*0.001*Csalv*8.9*0.001;
        let coppermass = 3*singlephaseCoppermasslv;
        dispatch(setLV({ key: 'Coppermasslv', value: coppermass }));
    }
    else if(Wiretypelv== 'Flat'){
        let Insulationlv = ((((Wirethicknesslv+Wirelengthlv)/(Wirethicknesslv*Wirelengthlv))*WireInsulation)/8.9);
        dispatch(setLV({ key: 'Insulationlv', value: Insulationlv }));
        let singlephaseCoppermasslv = (22/7)*Dmeanlv*Nph*0.001*Csalv*8.9*0.001*(Insulationlv+1)*1.025;
        let coppermass = 3*singlephaseCoppermasslv;
        dispatch(setLV({ key: 'Coppermasslv', value: coppermass }));
    }
    else if(Wiretypelv== 'Round'){
        let Insulationlv = (((22/7)*Dinner*0.5)/Csalv)*((Douter-Dinner)/8.9);
        dispatch(setLV({ key: 'Insulationlv', value: Insulationlv }));
        let singlephaseCoppermasslv = (22/7)*Dmeanlv*Nph*0.001*Csalv*8.9*0.001*(Insulationlv+1)*1.025;
        let coppermass = 3*singlephaseCoppermasslv;
        dispatch(setLV({ key: 'Coppermasslv', value: coppermass }));
    }
    
}, [Dmeanlv]); 

    return( 
        <h3>Coppermasslv= {Coppermasslv}</h3>
    );

}
export default Masses;

