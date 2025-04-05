function Mechanicalforces(){
// let Dmeanlv = 255.3,
// Thicklvradial = 25.1,
// Dmeanhv = 343.4,
// Thickhv = 48.2, 
// Nphlv = 20,
// Δlv = 359.79,
// Wirelengthlv = 400,
// Wirethicknesslv = 0.9,
// Δhv = 3.53,
// Turnshvcentertap = 1904,
// Heleclv = 400,
// Helechv = 388,
// Hmechlv = 400,
// Hilothickness = 8.5,
// Dmtr = 234.5,
// Ucc = 3.9, 
// Ilv = 909.3, 
// Ur = 1.088, 
// Ux = 3.75, 

// Isc=0.0,
// Ec=0.0,
// d=0.0,
// Fd=0.0,
// Fclv=0.0,
// Fchv=0.0,
// Slv=0.0,
// Shv=0.0,
// σcclv=0.0,
// σcchv=0.0,

// Fdlv=0.0,
// Fdhv=0.0,
// σcdlv=0.0,
// σcdhv=0.0,
// σctlv=0.0,
// σcthv=0.0,
// σtotal=0.0,

// Fr,
// Fs=0.0,
// σcrlv=0.0,
// IVV=0.0,
// Ff=0.0,
// σfflv=0.0,
// Fexhv=0.0,
// Fsex=0.0,
// σexhv=0.0;

// Isc = (100 / Ucc) * Ilv * Math.sqrt(2) * (1 + Math.exp((-22 / 7) * (Ur / Ux)));
// console.log(`Isc = ${Isc.toFixed(2)}`);

// Ec = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * (Dmtr * 0.001) * (Hilothickness + ((Thickhv + Thicklvradial) / 3)) * 0.001) / (
//     (Math.pow(10, 11)) * Math.pow((((Helechv + Heleclv) * 0.001) / 2), 2));
// console.log(`Ec = ${Ec.toFixed(2)}`);

// d = ((Hmechlv / 200) + ((Heleclv - Helechv) / 2)) * 0.001;
// console.log(`d = ${d.toFixed(2)}`);

// Fd = 3.77 * 0.000001 * (d / (((Helechv + Heleclv) * 0.001) / 2)) * Math.pow((Nphlv * Isc), 2) * 0.0001;
// console.log(`Fd = ${Fd.toFixed(2)}`);

// // ----------------Axial Forces----------------------

// Fclv = Fchv = 0.75 * Ec;
// console.log(`Fclv = Fchv = ${Fclv.toFixed(2)}`);

// Slv = (22 / 7) * Dmeanlv * Thicklvradial * 0.33;
// console.log(`Slv = ${Slv.toFixed(2)}`);

// Shv = (22 / 7) * Dmeanhv * Thickhv * 0.33;
// console.log(`Shv = ${Shv.toFixed(2)}`);

// σcclv = (Fclv * 10000) / Slv;
// console.log(`σcclv = ${σcclv.toFixed(2)}`);

// σcchv = (Fchv * 10000) / Shv;
// console.log(`σcchv = ${σcchv.toFixed(2)}`);

// Fdlv = Fdhv = (Fd * 10000 * 1.2) / 2;
// console.log(`Fdlv = Fdhv = ${Fdlv.toFixed(2)}`);

// σcdlv = Fdlv / Slv;
// console.log(`σcdlv = ${σcdlv.toFixed(2)}`);

// σcdhv = Fdhv / Shv;
// console.log(`σcdhv = ${σcdhv.toFixed(2)}`);

// σctlv = σcclv + σcdlv;
// console.log(`σctlv = ${σctlv.toFixed(2)}`);

// σcthv = σcchv + σcdhv;
// console.log(`σcthv = ${σcthv.toFixed(2)}`);

// σcttotal = σcthv + σctlv;
// console.log(`σcttotal = ${σcttotal.toFixed(2)}`);

// if (σcttotal <= 40.0) {
//     console.log('≤ 40 N/mm^2');
// } else {
//     console.log('careful not ≤ 40 N/mm^2');
// }

// // ------------------------Radial forces-------------------------

// Fr = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanlv * 0.001) / (100000000000 * (Heleclv * 0.001));
// console.log(`Fr = ${Fr.toFixed(2)}`);

// Fs = Fr / (22 / 7);
// console.log(`Fs = ${Fs.toFixed(2)}`);

// σcrlv = (Fs * 10000) / (2 * Δlv * Nphlv);
// console.log(`σcrlv = ${σcrlv.toFixed(2)}`);

// if (σcrlv <= 80.0) {
//     console.log('≤ 80 N/mm^2');
// } else {
//     console.log('careful not ≤ 80 N/mm^2');
// }

// IVV = (Wirelengthlv * Math.pow(Wirethicknesslv, 2)) / 6;
// console.log(`IVV = ${IVV.toFixed(2)}`);

// Ff = (Fr * 10000) / ((22 / 7) * Dmeanlv * Nphlv);
// console.log(`Ff = ${Ff.toFixed(2)}`);

// σfflv = ((Ff * Math.pow(20, 2)) / 6) * (1 / IVV);
// console.log(`σfflv = ${σfflv.toFixed(2)}`);

// σftlv = σcrlv + σfflv;
// console.log(`σftlv = ${σftlv.toFixed(2)}`);

// if (σftlv <= 130.0) {
//     console.log('≤ 130 N/mm^2');
// } else {
//     console.log('careful not ≤ 130 N/mm^2');
// }

// Fexhv = (2 * Math.pow((22 / 7), 2) * Math.pow((Nphlv * Isc), 2) * Dmeanhv * 0.001) / (100000000000 * (Helechv * 0.001));
// console.log(`Fexhv = ${Fexhv.toFixed(2)}`);

// Fsex = Fexhv / (22 / 7);
// console.log(`Fsex = ${Fsex.toFixed(2)}`);

// σexhv = (Fsex * 10000) / (2 * Δhv * Turnshvcentertap);
// console.log(`σexhv = ${σexhv.toFixed(2)}`);

// if (σexhv <= 80.0) {
//     console.log('≤ 80 N/mm^2');
// } else {
//     console.log('careful not ≤ 80 N/mm^2');
// }


    return(
        <>
        <h1>Mechanicalforces</h1>
        </>
    )
}
export default Mechanicalforces;
