function Lv4(){
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';
import { setSpec, selectSpec} from './../database/specsSlice';


let thickradial = ((Layerslv*Turnthicknesslv)+(Layerslv*  Noinsl*InsulationPaperThicknesslv)+(Nocollingductlv*Coolingductthickness))*1.035;
if(Wiretypelv== 'foil'){
  let Thickaxiallv = thickradial+(2*Barslv)+((2*3*0.35)*1.035);
}else if(Wiretypelv== 'flat'){
let Thickaxiallv = thickradial + (2*Turnthicknesslv)+((2*3*0.35)*1.035)}
else if(Wiretypelv== 'round'){
    Thickaxiallv = thickradial;
}
 
Фexternalradial = Фinternalradial + (2*thickradial);
Фexternalaxial =  Фinternalaxial + (2*Thickaxiallv) - 2bars or wires;
 
 
 a = ( Фexternalaxial - Thickaxiallv )/2;
 b = ( Фexternalradial - thickradial )/2;
 
    // Dmean equation
     let Dmeanlv = (a + b) * ((3 * Math.pow(a - b, 2)) / (Math.pow(a + b, 2) * Math.sqrt((-3 * Math.pow(a - b, 2)) / Math.pow(a + b, 2) + 4) + 10)) + 1;
    
    dispatch(setLV({ key: 'Dmeanlv', value: Dmeanlv }));
    let Dmlv = Фinternalradial + thickradial;
        
    dispatch(setLV({ key: 'Dmlv', value: Dmlv }));
    //need adjustments according to the wire type
     singlephaseCoppermasslv = (22/7)*Dmeanlv*Nph*0.001*Csalv*8.9*0.001;
     coppermass = 3*singlephaseCoppermasslv;
     
     dispatch(setLV({ key: 'Coppermasslv', value: coppermass }));
     
     Connectionlv = Iphlv/200;
     //adjust this equation
     Eddylv = (Wirethicknesslv^4)*(Nph^2)*0.001;
     Pcc75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv)*3*Iphlv;
     let pccConn= (0.01*Connectionlv);
     let pccEddy= (0.01*Eddylv);
     
     pccAdditioned = Pcc75lvtemp+pccConn+pccEddy;
     Pcc75lv = pccAdditioned * (0.01*Maj);
     Pcc95lv = Pcc75lv*1.064;
     
     
     
     Rph75lvtemp = 2.097*0.00001*( ((22/7)*Dmeanlv*Nph)/Csalv);
     Rph75lv= Rph75lvtemp * (0.01*Maj);
     Rph95lv= Rph75lv*1.064;
     Rbettwoterminalslv=Rph95lv*2;
     Rph20lv=  Rph95lv  *1.2947;
     
     
     

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
        <p>alv =  {a}   ,b lv =   {b}</p>
        <p>Dmean = {Dmeanlv} </p>
    </div>
    
    <div>
    <strong>For Ux:</strong>
    <p>Dmlv = {Dmlv}</p>
    </div>
    </>
  )
}
export default Lv4;

