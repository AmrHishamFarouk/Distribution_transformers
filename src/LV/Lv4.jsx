import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';
import { setSpec, selectSpec} from './../database/specsSlice';

function Lv4(){

let thickradial = ((Layerslv*Turnthicknesslv)+(Layerslv*  Noinsl*InsulationPaperThicknesslv)+(Nocollingductlv*Coolingductthickness))*1.035;
if(Wiretypelv== 'Foil'){
  let Thickaxiallv = thickradial+(2*Barslv)+((2*3*0.35)*1.035);
}else if(Wiretypelv== 'Flat'){
let Thickaxiallv = thickradial + (2*Turnthicknesslv)+((2*3*0.35)*1.035)}
else if(Wiretypelv== 'Round'){
    Thickaxiallv = thickradial;
}
    const Barslv = useSelector((state) => selectLV(state, 'Barslv'));
    


    const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));

// Nph: 0.0,
//   Iphlv: 0.0,
//   Wiretypelv: 'foil',
//   NumberOfWires: 1,
//   δlv: 0.0,
//   Wirethicknesslv: 0.0,
//   Wirelengthlv:0.0,
//   WireInsulation: 0.0,
//   WireR:0.5,
//   Dinner:0.0,
//   Douter:0.0,
//   Csalv: 0.4,
//   Turnlengthlv: 0.0,
//   Turnthicknesslv: 0.0,
//   TurnsPerLayer:1.0,
//   Hmechlv: 0.0,
//   Heleclv: 0.0,
//   MinLayersPerPacketlv:0,
//   Minpacketslv:0,
//   Layerslv: 0.0,
//   Firstpacketlv: 0.0,
//   Secondpacketlv: 0.0,
//   Thirdpacketlv: 0.0,
//   Fourthpacketlv: 0.0,
//   Glv: 0.0,
//   Gimplv: 0.0,
//   Insulationlv: 0.0,
//   InsulationPaperThicknesslv: 0.13,
//   Thickradiallv: 0.0,
//   Thickaxiallv: 0.0,
//   Barslv: 0.0,
// Фexternalradial = Фinternalradial + (2*thickradial);
// Фexternalaxial =  Фinternalaxial + (2*Thickaxiallv) - 2bars or wires;
 
 
//  a = ( Фexternalaxial - Thickaxiallv )/2;
//  b = ( Фexternalradial - thickradial )/2;
 
//     // Dmean equation
//      let Dmeanlv = (a + b) * ((3 * Math.pow(a - b, 2)) / (Math.pow(a + b, 2) * Math.sqrt((-3 * Math.pow(a - b, 2)) / Math.pow(a + b, 2) + 4) + 10)) + 1;
    
//     dispatch(setLV({ key: 'Dmeanlv', value: Dmeanlv }));
//     let Dmlv = Фinternalradial + thickradial;
        
//     dispatch(setLV({ key: 'Dmlv', value: Dmlv }));
//     //need adjustments according to the wire type
//      singlephaseCoppermasslv = (22/7)*Dmeanlv*Nph*0.001*Csalv*8.9*0.001;
//      coppermass = 3*singlephaseCoppermasslv;
     
//      dispatch(setLV({ key: 'Coppermasslv', value: coppermass }));
     
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
     
     
     

    return( <></> );

//     <>
//         <h1>Thickness LV</h1>
    
//     <div>
//         <strong>Radial LV: {thickradial}</strong>
//     </div>
    
//      <div>
//         <strong>Axial LV: { Thickaxiallv }</strong>
//     </div>
//      <div>
//          <p>Φ LV = {Фinternalradial}/{Фinternalaxial} Ξ {Фexternalradial} /{Фexternalaxial}</p>
//     </div>
    
//     <div>
//         <p>alv =  {a}   ,b lv =   {b}</p>
//         <p>Dmean = {Dmeanlv} </p>
//     </div>
    
//     <div>
//     <strong>For Ux:</strong>
//     <p>Dmlv = {Dmlv}</p>
//     </div>
//     </>
}
export default Lv4;

