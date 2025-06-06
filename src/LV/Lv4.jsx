import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';
import { setSpec, selectSpec} from './../database/specsSlice';
import Power from './POWERS/Power';

import Masses from './MASSES/Masses';
function Lv4(){
      const dispatch = useDispatch();

    const Barslv = useSelector((state) => selectLV(state, 'Barslv'));
    const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
    const Turnthicknesslv = useSelector((state) => selectLV(state, 'Turnthicknesslv'));
    const InsulationPaperThicknesslv = useSelector((state) => selectLV(state, 'InsulationPaperThicknesslv'));
    const Nocollingductlv = useSelector((state) => selectLV(state, 'Nocollingductlv'));
    const Coolingductthickness = useSelector((state) => selectLV(state, 'Coolingductthickness'));
    const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));
    const Noinslv = useSelector((state) => selectLV(state, 'Noinslv'));
    const Фinternalradial = useSelector((state) => selectLV(state, 'Фinternalradial'));
    const Фinternalaxial = useSelector((state) => selectLV(state, 'Фinternalaxial'));
    const Thickaxiallv = useSelector((state) => selectLV(state, 'Thickaxiallv'));
    const Dmeanlv = useSelector((state) => selectLV(state, 'Dmeanlv'));
    const Dmlv = useSelector((state) => selectLV(state, 'Dmlv'));

let thickradial = ((Layerslv*Turnthicknesslv)+(Layerslv*  Noinslv*InsulationPaperThicknesslv)+(Nocollingductlv*Coolingductthickness))*1.035;
       dispatch(setLV({ key: 'Thickradiallv', value: thickradial }));

if(Wiretypelv== 'Foil'){
  let Thickaxiallv = thickradial+(2*Barslv)+((2*3*0.35)*1.035);
       dispatch(setLV({ key: 'Thickaxiallv', value: Thickaxiallv }));

}
else if(Wiretypelv== 'Flat'){
let Thickaxiallv = thickradial + (2*Turnthicknesslv)+((2*3*0.35)*1.035);
     dispatch(setLV({ key: 'Thickaxiallv', value: Thickaxiallv }));
}
else if(Wiretypelv== 'Round'){
    let Thickaxiallv = thickradial;
         dispatch(setLV({ key: 'Thickaxiallv', value: Thickaxiallv }));
}
let Фexternalradial = Фinternalradial + (2*thickradial);
let Фexternalaxial =  Фinternalaxial + (2*Thickaxiallv) - (2*Barslv);
        
useEffect(() => {
     dispatch(setLV({ key: 'Фexternalradial', value: Фexternalradial }));
     dispatch(setLV({ key: 'Фexternalaxial', value: Фexternalaxial }));

        let a = ( Фexternalaxial - Thickaxiallv )/2;
        let b = ( Фexternalradial - thickradial )/2;  
        const sum = a + b;
  const diff = a - b;
  const diffSquared = Math.pow(diff, 2);
  const sumSquared = Math.pow(sum, 2);

  const sqrtPart = Math.sqrt(((-3 * diffSquared) / sumSquared) + 4);
  const denominator = (sumSquared * sqrtPart) + 10;
  const result = sum * ((3 * diffSquared) / denominator + 1);
        dispatch(setLV({ key: 'Dmeanlv', value: result }));   
        }, [Фexternalradial, Фexternalaxial]); 



 console.log(useSelector((state) => state.lv))

 useEffect(() => {
    let Dmlv = Фinternalradial + thickradial;      
    dispatch(setLV({ key: 'Dmlv', value: Dmlv }));
       }, [Фinternalradial, thickradial]); 



//      Connectionlv = Iphlv/200;
//      //adjust this equation
//      Eddylv = (Wirethicknesslv^4)*(Nph^2)*0.001;
//      Pcc75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv)*3*Iphlv;
//      let pccConn= (0.01*Connectionlv);
//      let pccEddy= (0.01*Eddylv);
     
//      pccAdditioned = Pcc75lvtemp+pccConn+pccEddy;
//      Pcc75lv = pccAdditioned * (0.01*Maj);
//      Pcc95lv = Pcc75lv*1.064;
     
     
     
//      Rph75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv);
//      Rph75lv= Rph75lvtemp * (0.01*Maj);
//      Rph95lv= Rph75lv*1.064;
//      Rbettwoterminalslv=Rph95lv*2;
//      Rph20lv=  Rph95lv  *1.2947;
     
     
     

    return( 
        <>
        <h1>Thickness LV</h1>
    
    <div>
        <strong>Radial LV: {thickradial}</strong>
    </div>
    
     <div>
        <strong>Axial LV: { Thickaxiallv }</strong>
    </div>
     <div>
         <p>Φ LV = {Фinternalradial}/{Фinternalaxial} Ξ {Фexternalradial} /{Фexternalaxial}</p>
    </div>
    
    <div>
        <p>Dmean = {Dmeanlv} </p>
    </div>
    
     <div>
     <strong>For Ux:</strong>
     <p>Dmlv = {Dmlv}</p>
     </div>
     <Masses />
     <Power />
   </>
    );

}
export default Lv4;

