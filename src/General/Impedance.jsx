import { setLV, selectLV } from './../database/lvSlice';
import { setHV, selectHV } from './../database/lvSlice';


function Impedance(){

const Ratedpower = useSelector((state) => selectHV(state, 'Ratedpower'));
const LV = useSelector((state) => selectHV(state, 'LV'));
const Totalloadlosses
//the total losses is not found in the slices
const F = useSelector((state) => selectHV(state, 'Ratedpower'));
const Maj = useSelector((state) => selectHV(state, 'Maj'));
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
const Dmhilo = useSelector((state) => selectLV(state, 'Dmhilo'));
const Thickhilo = useSelector((state) => selectLV(state, 'Thickhilo'));

//we need to add distance between rods in the hilo slice
const Thickradialhv = useSelector((state) => selectHV(state, 'Thickradialhv'));
const Helechv = useSelector((state) => selectHV(state, 'Helechv'));
const Dmhv = useSelector((state) => selectHV(state, 'Dmhv'));
const turns = useSelector((state) => selectHV(state, 'Turnshv'));
const Iphhv = useSelector((state) => selectHV(state, 'Iphhv'));
const δhvpos7 = useSelector((state) => selectHV(state, 'δhvpos7'));
const Dmeanhv = useSelector((state) => selectHV(state, 'Dmeanhv'));
const Csahv = useSelector((state) => selectHV(state, 'Csahv'));


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
        <h1>impedance</h1>
        </>
    )
}
export default Impedance;





//     <!-- First Group -->
//     <div class="form-group">
//       <label for="Ratedpower">Rated Power(kVA):</label>

//       <label for="LV"> LV(do not write it in kV):</label>

//       <label for="Totalloadlosses">Total Load Losses(at 95):</label>

//       <label for="F">Frequency (HZ):</label>

//       <label for="Maj">Maj(%):</label>

//       <label for="Thicklvradial">Thick LV Radial(mm):</label>

//       <label for="Dmlv">Dmlv(mm):</label>

//       <label for="δlv">δlv(A/mm²):</label>

//       <label for="Dmeanlv">Dmeanlv(mm):</label>

//       <label for="Nphlv">Nphlv:</label>

//       <label for="Δlv">Δlv(sum of all wires):</label>

//       <label for="Wirelengthlv">Wirelengthlv(mm):</label>

//       <label for="Wirethicknesslv">Wirethicknesslv(mm):</label>

//       <label for="Heleclv">Heleclv(mm):</label>

//       <label for="Hmechlv">Hmechlv(mm):</label>

//       <label for="Ilv">Ilv(A):</label>

//       <label for="num">for power(12),for distrebution(6):</label>
//     </div>

//     <!-- Second Group -->
//     <div class="form-group">
//       <h2>Intermediate Parameters</h2>
//       <label for="Dmtr">Dmtr(mm):</label>
//       <input type="number" id="Dmtr">

//       <label for="Hilothickness">Hilothickness(mm):</label>
//       <input type="number" id="Hilothickness">

//       <label for="ٌRods">distance between PSP sticks(mm):</label>
//       <input type="number" id="Rods" value="20">
//     </div>

//     <!-- Third Group -->
//     <div class="form-group">
//       <h2>HV Parameters</h2>
//       <label for="Thickhv">Thickhv(mm):</label>
//       <input type="number" id="Thickhv">

//       <label for="Helechv">Helechv(mm):</label>
//       <input type="number" id="Helechv">

//       <label for="Dmhv">Dmhv(mm):</label>
//       <input type="number" id="Dmhv">

//       <label for="Turnsatcentertap">Turns at Center Tap:</label>
//       <input type="number" id="Turnsatcentertap">

//       <label for="Iphhv">Iphhv(A):</label>
//       <input type="number" id="Iphhv">

//       <label for="δhvpos7">δhvpos7(A/mm²):</label>
//       <input type="number" id="δhvpos7">

//       <label for="Dmeanhv">Dmeanhv(mm):</label>
//       <input type="number" id="Dmeanhv">

//       <label for="Δhv">Δhv(sum of all wires in mm²):</label>
//       <input type="number" id="Δhv">
//     </div>
//   </div>
