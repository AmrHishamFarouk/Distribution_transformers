import { setLV, selectLV } from './../database/lvSlice';
import { setHV, selectHV } from './../database/lvSlice';
import { setHilo, selectHilo } from './../database/hiloSlice';
import { setSpec, selectSpec } from './../database/lvSlice';


function Impedance(){

const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
const LV = useSelector((state) => selectSpec(state, 'LV'));
const F = useSelector((state) => selectSpec(state, 'Ratedpower'));
const Maj = useSelector((state) => selectSpec(state, 'Maj'));

const Thicklvradial = useSelector((state) => selectLV(state, 'Thickradiallv'));
const Dmlv = useSelector((state) => selectLV(state, 'Dmlv'));
const δlv = useSelector((state) => selectLV(state, 'δlv'));
const Dmeanlv = useSelector((state) => selectLV(state, 'Dmeanlv'));
const Nphlv = useSelector((state) => selectLV(state, 'Nph'));
const Δlv = useSelector((state) => selectLV(state, 'Csalv'));
const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
const Ilv = useSelector((state) => selectLV(state, 'Iphlv'));
//we need to make a num variable to identify if it is power or normal distrebution

//hilo variables
const Dmtr = useSelector((state) => selectHilo(state, 'Dmhilo'));
const Hilothickness = useSelector((state) => selectHilo(state, 'Thickhilo'));
// const Rods = useSelector((state) => selectHilo(state, 'Thickhilo'));

//we need to add distance between rods in the hilo slice
const Thickhv = useSelector((state) => selectHV(state, 'Thickradialhv'));
const Helechv = useSelector((state) => selectHV(state, 'Helechv'));
const Dmhv = useSelector((state) => selectHV(state, 'Dmhv'));
const turns = useSelector((state) => selectHV(state, 'Turnshv'));
const Turnsatcentertap = turns[2];
const Iphhv = useSelector((state) => selectHV(state, 'Iphhv'));
const δhvpos7 = useSelector((state) => selectHV(state, 'δhvpos7'));
const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
const Δhv = useSelector((state) => selectHV(state, 'Csahv'));
// const Totalloadlosses = useSelector((state) => selectHV(state, 'Csahv'));

      let Kf = 1 - ((Thicklvradial + Hilothickness + Thickhv) / ((22 / 7) * Helechv));
      let Ur = Totalloadlosses / (Ratedpower * 10);
      let Uxtemp = 2.4805 * 0.00001 * F * 0.000001 * Kf *
                   (((Dmlv * Thicklvradial) / 3) + (Dmtr * Hilothickness) + ((Dmhv * Thickhv) / 3)) *
                   (Math.pow((Turnsatcentertap * Iphhv), 2)) *
                   (300 / (Ratedpower * Helechv));
      let Ux = Uxtemp * (1 + (Maj / 100));
      let Ucc = Math.sqrt(Math.pow(Ur, 2) + Math.pow(Ux, 2));
      
      let voltagedrop08 = ((Ur * 0.8) + (Ux * 0.6)) + ((1 / 200) * ((Ux * 0.8) - (Ur * 0.6)));
      let voltagedropunity = Ur + ((1 / 200) * (Math.pow(Ux, 2)));
      let voltagelv08 = LV * (1 - (voltagedrop08 / 100));
      
      let Tsclv = 1.768 * Math.pow((Ucc / δlv), 2);
      let Tschv = 1.768 * Math.pow((Ucc / δhvpos7), 2);
      let Tsc = (Tsclv > Tschv ? parseInt(Tschv) : parseInt(Tsclv));
      
      let tempcoillv = 105 + (8.2 * Math.pow(((100 / Ucc) * δlv), 2) * Tsc * 0.001);
      let tempcoilhv = 105 + (8.2 * Math.pow(((100 / Ucc) * δhvpos7), 2) * Tsc * 0.001);
      

      // Mechanical Calculations
      let Isc = (100 / Ucc) * Ilv * Math.sqrt(2) * (1 + Math.exp((-22 / 7) * (Ur / Ux)));
      let Ec = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * (Dmtr * 0.001) *
               (Hilothickness + ((Thickhv + Thicklvradial) / 3)) * 0.001) /
               (Math.pow(10, 11) * Math.pow((((Helechv + Heleclv) * 0.001) / 2), 2));
      let d = ((Hmechlv / 200) + ((Heleclv - Helechv) / 2)) * 0.001;
      let Fd = 3.77 * 0.000001 * (1/200) * Math.pow((Nphlv * Isc), 2) * 0.0001;
      
      // Axial Forces
      let Fclv = 0.75 * Ec;
      let Fchv = Fclv; // same as Fclv
      let Slv = (22 / 7) * Dmeanlv * Thicklvradial * 0.33;
      let Shv = (22 / 7) * Dmeanhv * Thickhv * 0.33;
      let σcclv = (Fclv * 10000) / Slv;
      let σcchv = (Fchv * 10000) / Shv;
      let Fdlv = (Fd * 10000 * 1.2) / 2;
      let Fdhv = Fdlv; // same as Fdlv
      let σcdlv = Fdlv / Slv;
      let σcdhv = Fdhv / Shv;
      let σctlv = σcclv + σcdlv;
      let σcthv = σcchv + σcdhv;
      let σcttotal = σcthv + σctlv;
      
      // Radial Forces
      let Fr = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanlv * 0.001) /
               (100000000000 * (Heleclv * 0.001));
      let Fs = Fr / (22 / 7);
      let σcrlv = (Fs * 10000) / (2 * Δlv * Nphlv);
      
      let IVV = (Wirelengthlv * Math.pow(Wirethicknesslv, 2)) / num;
      let Ff = (Fr * 10000) / ((22 / 7) * Dmeanlv * Nphlv);
      let σfflv = ((Ff * Math.pow(Rods, 2)) / num) * (1 / IVV);
      let σftlv = σcrlv + σfflv;
      
      let Fexhv = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanhv * 0.001) /
                  (100000000000 * (Helechv * 0.001));
      let Fsex = Fexhv / (22 / 7);
      let σexhv = (Fsex * 10000) / (2 * Δhv * Turnsatcentertap);
      
return(
        <>
            {Kf}
            {Ur}
            {Uxtemp}
            {Ux}
            {Ucc}
            {voltagedrop08}
            {voltagedropunity}
            {voltagelv08}
            {Tsclv}
            {Tschv} 
            {Tsc}
            {tempcoillv}
            {tempcoilhv}

            {Isc}
            {Ec}
            {d} 
            {Fd}

            {σcttotal}
            {σftlv}
            {σexhv}


        </>
    )
}
export default Impedance;