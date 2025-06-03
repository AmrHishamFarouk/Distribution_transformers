import React, { useState , useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';
import { setSpec, selectSpec} from './../../database/specsSlice';
    
function Power(){
    const dispatch = useDispatch();

    const Iphlv = useSelector((state) => selectLV(state, 'Iphlv'));
    const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
    const Nph = useSelector((state) => selectLV(state, 'Nph'));
    const Dmeanlv = useSelector((state) => selectLV(state, 'Dmeanlv'));
    const Maj = useSelector((state) => selectSpec(state, 'Maj'));
    const Csalv = useSelector((state) => selectLV(state, 'Csalv'));

        let Connectionlv = Iphlv/200;
        //adjust this equation
        let Eddylv = Math.pow(Wirethicknesslv, 4) * Math.pow(Nph, 2) * 0.001;

        let Pcc75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv)*3*Math.pow(Iphlv, 2) ;
        let pccConn= (0.01*Connectionlv)*Pcc75lvtemp;
        let pccEddy= (0.01*Eddylv)*Pcc75lvtemp;
        
        let pccAdditioned = Pcc75lvtemp+pccConn+pccEddy;
        let Pcc75lv = pccAdditioned * (1+(0.01*Maj));
        dispatch(setLV({ key: 'Pcc75lv', value: Pcc75lv }));

        let Pcc95lv = Pcc75lv*1.064;
        dispatch(setLV({ key: 'Pcc95lv', value: Pcc95lv }));


        let Rph75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv);
        let Rph75lv= Rph75lvtemp * (1+(0.01*Maj));
        dispatch(setLV({ key: 'Rph75lv', value: Rph75lv }));

        let Rph95lv= Rph75lv*1.064;
        dispatch(setLV({ key: 'Rph95lv', value: Rph95lv }));

        let Rbettwoterminalslv=Rph95lv*2;
        dispatch(setLV({ key: 'Rbettwoterminalslv', value: Rbettwoterminalslv }));

        let Rph20lv=  Rph95lv  /1.2947;
        dispatch(setLV({ key: 'Rph20lv', value: Rph20lv }));

        let Rph20lvbettwoterminalslv= Rph20lv*2;
        dispatch(setLV({ key: 'Rph20lvbettwoterminalslv', value: Rph20lvbettwoterminalslv }));


    return(
    <div>
    <h3>Connection= {Connectionlv}</h3>
    <h3>Eddy= {Eddylv}</h3>
    <h3>pcc= {Pcc75lvtemp}  Watt</h3>
    <h3>pcc75= {pccAdditioned}  +connection+Eddy</h3>
    <h3>Pcc75= {Pcc75lv}watt    Maj{Maj}</h3>
    <h3>Pcc95= {Pcc95lv}watt </h3>

    <h3>Rph75= {Rph75lvtemp}</h3>
    <h3>Rph75= {Rph75lv}    Maj{Maj}</h3>
    <h3>Rph95lv= {Rph95lv}</h3>
    <h3>Rbettwoterminalslv= {Rbettwoterminalslv}</h3>
    <h3>Rph20lv= {Rph20lv}</h3>
    <h3>Rph20lvbettwoterminalslv= {Rph20lvbettwoterminalslv}</h3>
    </div>
    )
}
export default Power;