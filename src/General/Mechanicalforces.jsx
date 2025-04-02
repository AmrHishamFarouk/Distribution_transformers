function Mechanicalforces(){
let Isc = 68396,
Ec = 12.85,
d = 0.009,
Fd = 9.16,
Dmeanlv = 295.84,
Thicklvradial = 28.2,
Dmeanhv = 399.62,
Thickhv = 48.2, 
Nphlv = 15,
Δlv = 539.78,
Wirelengthlv = 400,
Wirethicknesslv = 1.35,
Δhv = 13.216,
Turnshvcentertap = 682,
Heleclv = 400,
Helechv = 380,

Fclv=0.0,
Fchv=0.0,
Slv=0.0,
Shv=0.0,
σcclv=0.0,
σcchv=0.0,

Fdlv=0.0,
Fdhv=0.0,
σcdlv=0.0,
σcdhv=0.0,
σctlv=0.0,
σcthv=0.0,
σtotal=0.0,

Fr,
Fs=0.0,
σcrlv=0.0,
IVV=0.0,
Ff=0.0,
σfflv=0.0,
Fexhv=0.0,
Fsex=0.0,
σexhv=0.0;

Isc = (100/Ucc)*Ilv*Math.sqrt(2)*(1+e^((22/7)*(Ur/Ux)))

Ec = ( 2 * Math.pow((22/7), 2) * Math.pow((Nph*Isc), 2) * (Dmtr*0.001) * (hilothickness+((hvthickness+lvthickness)/3)) * 0.001 ) / ( (Math.pow(10, 11)) * (Math.pow((((helechv+heleclv)*0.001)/2), 2)) )

d = (  (hmechlv/200) + ((heleclv=helechv)/2)  ) * 0.001

Fd = 3.77 * 0.000001 * (d/(((helechv+heleclv)*0.001)/2)) * Math.pow((Nph*Isc), 2) * 0.0001

// ----------------Axial Forces----------------------

Fclv = Fchv = 0.75 * Ec;

// Calculation of Slv
Slv = (22 / 7) * Dmeanlv * Thicklvradial * 0.33;

// Calculation of Shv
Shv = (22 / 7) * Dmeanhv * Thickhv * 0.33;

// Calculation of σcclv
σcclv = (Fclv * 10000) / Slv;

// Calculation of σcchv
σcchv = (Fchv * 10000) / Shv;

// Calculation of Fdlv and Fdhv
Fdlv = Fdhv = (Fd * 10000 * 1.2) / 2;

// Calculation of σcdlv
σcdlv = Fdlv / Slv;

// Calculation of σcdhv
σcdhv = Fdhv / Shv;

// Total stresses
σctlv = σcclv + σcdlv;

σcthv = σcchv + σcdhv;

σcttotal = σcthv + σctlv;

if(σcttotal<=40.0){
console.log('≤ 40 N/mm^2')
}
else{    
console.log('carefull not ≤ 40 N/mm^2')
}

// ------------------------Radial forces-------------------------

Fr = (2 * ((22 / 7) ** 2) * ((Nphlv * Isc) ** 2) * Dmeanlv * 0.001) / (100000000000 * (Heleclv * 0.001));

Fs = Fr / (22 / 7);

σcrlv = (Fs * 10000) / (2 * Δlv * Nphlv);

if(σcrlv<=80.0){
console.log('≤ 80 N/mm^2')
}
else{    
console.log('carefull not ≤ 80 N/mm^2')
}

IVV = (Wirelengthlv * (Wirethicknesslv**2)) / 6;

Ff = (Fr * 10000) / ((22 / 7) * Dmeanlv * Nphlv);

σfflv = ((Ff * (20 ** 2)) / 6) * (1 / IVV);

σftlv = σcrlv + σfflv

if(σftlv<=130.0){
console.log('≤ 130 N/mm^2')
}
else{    
console.log('carefull not ≤ 130 N/mm^2')
}

Fexhv = (2 * ((22 / 7) ** 2) * ((Nphlv * Isc) ** 2) * Dmeanhv * 0.001) / (100000000000 * (Helechv*0.001));

Fsex = Fexhv / (22 / 7);

σexhv = (Fsex * 10000) / (2 * Δhv * Turnshvcentertap);

if(σexhv<=80.0){
console.log('≤ 80 N/mm^2')
}
else{    
console.log('carefull not ≤ 80 N/mm^2')
}


    return(
        <>
        </>
    )
}
export default Mechanicalforces;