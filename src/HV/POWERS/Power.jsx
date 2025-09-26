import React, { useState , useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';
import { selectSpec} from './../../database/specsSlice';
    
function Power(){
    const dispatch = useDispatch();

    const Iphhv = useSelector((state) => selectHV(state, 'Iphhv'));
    const Ilinehv = useSelector((state) => selectHV(state, 'Ilinehv'));
    const Dinner = useSelector((state) => selectHV(state, 'Dinner'));
    const Layershv = useSelector((state) => selectHV(state, 'Layershv'));

    const turnshv = useSelector((state) => selectHV(state, 'Turnshv'));
    const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
    const Maj = useSelector((state) => selectSpec(state, 'Maj'));
    const Csahv = useSelector((state) => selectHV(state, 'Csahv'));

        let Connectionhv = Ilinehv/200;
        //adjust this equation
        let Eddyhv = Math.pow(Dinner, 4) * Math.pow(Layershv, 2)* 0.83 * 0.001;

        let Pcc75hvtemp = 2.097*0.00001*( ((22/7)*Dmeanhv*turnshv[2])/Csahv)*3*Math.pow(Iphhv, 2) ;
        let pccConn= (0.01*Connectionhv)*Pcc75hvtemp;
        let pccEddy= (0.01*Eddyhv)*Pcc75hvtemp;
        
        let pccAdditioned = Pcc75hvtemp+pccConn+pccEddy;
        let Pcc75hv = pccAdditioned * (1+(0.01*Maj));
        dispatch(setHV({ key: 'Pcc75hv', value: Pcc75hv }));

        let Pcc95hv = Pcc75hv*1.064;
        dispatch(setHV({ key: 'Pcc95hv', value: Pcc95hv }));


        let Rph75hvtemp = 2.097*0.00001*( ((22/7)*Dmeanhv*turnshv[2])/Csahv);
        let Rph75hv= Rph75hvtemp * (1+(0.01*Maj));
        dispatch(setHV({ key: 'Rph75hv', value: Rph75hv }));

        let Rph95hv= Rph75hv*1.064;
        dispatch(setHV({ key: 'Rph95hv', value: Rph95hv }));
return(
    <div>
    <h3>Connection= {Connectionhv}</h3>
    <h3>Eddy= {Eddyhv}</h3>
    <h3>pcc= {Pcc75hvtemp}  Watt</h3>
    <h3>pcc75= {pccAdditioned}  +connection+Eddy</h3>
    <h3>Pcc75= {Pcc75hv}watt    Maj{Maj}</h3>
    <h3>Pcc95= {Pcc95hv}watt </h3>

    <h3>Rph75= {Rph75hvtemp}</h3>
    <h3>Rph75= {Rph75hv}    Maj{Maj}</h3>
    <h3>Rph95lv= {Rph95hv}</h3>

    </div>
    )
}
export default Power;