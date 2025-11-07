import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';
import { setHV, selectHV } from './../database/hvSlice';
import { setHilo, selectHilo } from './../database/hiloSlice';
import { setSpec, selectSpec } from './../database/specsSlice';
import { setGeneral, selectGeneral} from './../database/generalSlice';


function Impedance(){
// const dispatch = useDispatch();

// //the a num variable to identify if it is power or normal distrebution
// const [num, setnum] = useState(6);

// const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
// const LV = useSelector((state) => selectSpec(state, 'LV'));
// const F = useSelector((state) => selectSpec(state, 'F'));
// const Maj = useSelector((state) => selectSpec(state, 'Maj'));

// const Thicklvradial = useSelector((state) => selectLV(state, 'Thickradiallv'));
// const Dmlv = useSelector((state) => selectLV(state, 'Dmlv'));
// const δlv = useSelector((state) => selectLV(state, 'δlv'));
// const Dmeanlv = useSelector((state) => selectLV(state, 'Dmeanlv'));
// const Nphlv = useSelector((state) => selectLV(state, 'Nph'));
// const Δlv = useSelector((state) => selectLV(state, 'Csalv'));
// const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
// const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
// const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
// const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
// const Ilv = useSelector((state) => selectLV(state, 'Iphlv'));

// //hilo variables
// const Dmtr = useSelector((state) => selectHilo(state, 'Dmhilo'));
// const Hilothickness = useSelector((state) => selectHilo(state, 'Thickhilo'));
// const Rods = useSelector((state) => selectHilo(state, 'Rodshilo'));

// //we need to add distance between rods in the hilo slice
// const Thickhv = useSelector((state) => selectHV(state, 'Thickradialhv'));
// const Helechv = useSelector((state) => selectHV(state, 'Helechv'));
// const Hmechhv = useSelector((state) => selectHV(state, 'Hmechhv'));
// const Dmhv = useSelector((state) => selectHV(state, 'Dmhv'));
// const turns = useSelector((state) => selectHV(state, 'Turnshv'));
// const Turnsatcentertap = turns[2];
// const Iphhv = useSelector((state) => selectHV(state, 'Iphhv'));
// const δhvpos7 = useSelector((state) => selectHV(state, 'δhvpos7'));
// const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
// const Δhv = useSelector((state) => selectHV(state, 'Csahv'));
// const Totalloadlosses = useSelector((state) => selectHV(state, 'Totalloadlosses'));


//   let Kf = 1 - ((Thicklvradial + Hilothickness + Thickhv) / ((22 / 7) * Helechv));
//   dispatch(setGeneral({ key: 'Kf', value: Kf }));

//   let Ur = Totalloadlosses / (Ratedpower * 10);
//   dispatch(setGeneral({ key: 'Ur', value: Ur }));

// const geomFactor = (((Dmlv * Thicklvradial) / 3) + (Dmtr * Hilothickness) + ((Dmhv * Thickhv) / 3));
// const currentFactor = Math.pow((Turnsatcentertap * Iphhv), 2);
// const scalingFactor = 300 / (Ratedpower * Helechv);
// const coeff = 2.4805 * 0.00001 * F * 0.000001 * Kf;

//   const Uxtemp = coeff * geomFactor * currentFactor * scalingFactor;
//   dispatch(setGeneral({ key: 'Uxtemp', value: Uxtemp }));

//   let Ux = Uxtemp * (1 + (Maj / 100));
//   dispatch(setGeneral({ key: 'Ux', value: Ux }));

//   let Ucc = Math.sqrt(Math.pow(Ur, 2) + Math.pow(Ux, 2));
//   dispatch(setGeneral({ key: 'Ucc', value: Ucc }));

//   let voltagedrop08 = ((Ur * 0.8) + (Ux * 0.6)) + ((1 / 200) * ((Ux * 0.8) - (Ur * 0.6)));
//   dispatch(setGeneral({ key: 'voltagedrop08', value: voltagedrop08 }));

//   let voltagedropunity = Ur + ((1 / 200) * (Math.pow(Ux, 2)));
//   dispatch(setGeneral({ key: 'voltagedropunity', value: voltagedropunity }));

//   let voltagelv08 = LV * 1000 * (1 - (voltagedrop08 / 100));
//   dispatch(setGeneral({ key: 'voltagelv08', value: voltagelv08 }));

//   let Tsclv = 1.768 * Math.pow((Ucc / δlv), 2);
//   dispatch(setGeneral({ key: 'Tsclv', value: Tsclv }));

//   let Tschv = 1.768 * Math.pow((Ucc / δhvpos7), 2);
//   dispatch(setGeneral({ key: 'Tschv', value: Tschv }));

//   let Tsc = (Tsclv > Tschv ? parseInt(Tschv) : parseInt(Tsclv));
//   dispatch(setGeneral({ key: 'Tsc', value: Tsc }));

//   let tempcoillv = 105 + (8.2 * Math.pow(((100 / Ucc) * δlv), 2) * Tsc * 0.001);
//   dispatch(setGeneral({ key: 'tempcoillv', value: tempcoillv }));

//   let tempcoilhv = 105 + (8.2 * Math.pow(((100 / Ucc) * δhvpos7), 2) * Tsc * 0.001);
//   dispatch(setGeneral({ key: 'tempcoilhv', value: tempcoilhv }));

//   // Mechanical Calculations
//   let Isc = (100 / Ucc) * Ilv * Math.sqrt(2) * (1 + Math.exp((-22 / 7) * (Ur / Ux)));
//   dispatch(setGeneral({ key: 'Isc', value: Isc }));

//   let Ec = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * (Dmtr * 0.001) *
//           (Hilothickness + ((Thickhv + Thicklvradial) / 3)) * 0.001) /
//           (Math.pow(10, 11) * Math.pow((((Helechv + Heleclv) * 0.001) / 2), 2));
//   dispatch(setGeneral({ key: 'Ec', value: Ec }));

//   let d = (((Hmechlv / 200) + ((Heleclv - Hmechhv) / 2)) * 0.001);
//   dispatch(setGeneral({ key: 'd', value: d }));

//   let Fd = 3.77 * 0.000001 * (1 / 200) * Math.pow((Nphlv * Isc), 2) * 0.0001;
//   dispatch(setGeneral({ key: 'Fd', value: Fd }));

//       // Axial Forces
//       let Fclv = 0.75 * Ec;
//       let Fchv = Fclv; // same as Fclv
//       let Slv = (22 / 7) * Dmeanlv * Thicklvradial * 0.33;
//       let Shv = (22 / 7) * Dmeanhv * Thickhv * 0.33;
//       let σcclv = (Fclv * 10000) / Slv;
//       let σcchv = (Fchv * 10000) / Shv;
//       let Fdlv = (Fd * 10000 * 1.2) / 2;
//       let Fdhv = Fdlv; // same as Fdlv
//       let σcdlv = Fdlv / Slv;
//       let σcdhv = Fdhv / Shv;
//       let σctlv = σcclv + σcdlv;
//       let σcthv = σcchv + σcdhv;
//       let σcttotal = σcthv + σctlv;
//       dispatch(setGeneral({ key: 'σcttotal', value: value}));

//       // Radial Forces
//       useEffect(() => {
//       let Fr = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanlv * 0.001) /(100000000000 * (Heleclv * 0.001));
//       let Fs = Fr / (22 / 7);
//       let σcrlv = (Fs * 10000) / (2 * Δlv * Nphlv);
      
//       let IVV = (Wirelengthlv * Math.pow(Wirethicknesslv, 2)) / num;
//       let Ff = (Fr * 10000) / ((22 / 7) * Dmeanlv * Nphlv);
//       let σfflv = ((Ff * Math.pow(Rods, 2)) / num) * (1 / IVV);
//       let σftlv = σcrlv + σfflv;
//       dispatch(setGeneral({ key: 'σftlv', value: value}));

//       let Fexhv = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanhv * 0.001) /
//                   (100000000000 * (Helechv * 0.001));
//       let Fsex = Fexhv / (22 / 7);
//       let σexhv = (Fsex * 10000) / (2 * Δhv * Turnsatcentertap);
//       dispatch(setGeneral({ key: 'σexhv', value: value}));
//     }, [num,Rods]);

//       function updateRods(value){
//         dispatch(setHilo({ key: 'Rodshilo', value: value }));
//       }
      
return(
    <><h1>impedance</h1>
 {/* <div>
   <div>Kf: {Kf}</div>
   <div>Ur: {Ur}</div>
   <div>Uxtemp: {Uxtemp}</div>
   <div>Ux: {Ux}</div>
   <div>Ucc: {Ucc}</div>
   <div>Voltage Drop @ 0.8: {voltagedrop08}</div>
   <div>Voltage Drop @ Unity: {voltagedropunity}</div>
   <div>Voltage LV @ 0.8: {voltagelv08}</div>
   <div>Tsclv: {Tsclv}</div>
   <div>Tschv: {Tschv}</div>
   <div>Tsc: {Tsc}</div>
   <div>Temp Coil LV: {tempcoillv}</div>
   <div>Temp Coil HV: {tempcoilhv}</div>

   <div>Isc: {Isc}</div>
   <div>Ec: {Ec}</div>
   <div>d: {d}</div>
   <div>Fd: {Fd}</div>

   <div>σct Total: {σcttotal}</div>
   <div>σft LV: {σftlv}</div>
   <div>σex HV: {σexhv}</div>
 </div>


       <div>
         <label>change Rods distances</label>
         <input type="number" placeholder="Distance between Rods" onChange={(e) => updateRods(parseFloat(e.target.value))} value={Rods}/>
       </div>
         <button onClick={() => {setnum(12)}}>Power transformer</button>
         <button onClick={() => {setnum(6)}}>distrebution transformer</button> */}
        </>
    )
}
export default Impedance;