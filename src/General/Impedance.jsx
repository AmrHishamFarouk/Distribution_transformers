function Impedance(){
let Thicklvradial = 14.2,
    Thickhilo = 16.5,
    Thickhv = 26.61,
    Ratedpower = 50,
    Helechv = 204,
    Totalloadlosses = 897,
    Dmlv = 114.7,
    Dmtr = 145.5,
    Dmhv = 189.31,
    F = 50,
    Turnsatcentertap = 6417,
    Iphhv = 0.75,
    δlv = 3.03,
    δhvpos7 = 2.53,
    Maj = 1;

let Kf=0.0,
    Ur=0.0,
    Uxtemp=0.0,
    Ux=0.0,
    Ucc=0.0,
    voltagedrop08=0.0, 
    voltagedropunity=0.0, 
    voltagelv08=0.0, 
    Tsclv=0.0, 
    Tschv=0.0, 
    Tsc=0.0, 
    tempcoillv=0.0, 
    tempcoilhv=0.0;

Kf = 1 - ((Thicklvradial + Thickhilo + Thickhv) / ((22 / 7) * Helechv));
console.log("Kf:", Kf.toFixed(2));

Ur = Totalloadlosses / (Ratedpower * 10);
console.log("Ur:", Ur.toFixed(2));

Uxtemp = 2.4805 * 0.00001 * F * 0.000001 * Kf * (((Dmlv * Thicklvradial) / 3) + (Dmtr * Thickhilo) + ((Dmhv * Thickhv) / 3)) * (Math.pow((Turnsatcentertap * Iphhv), 2)) * (300 / (Ratedpower * Helechv));
console.log("Uxtemp:", Uxtemp.toFixed(2));

Ux = Uxtemp * (1+(Maj/100));
console.log("Ux:", Ux.toFixed(2));

Ucc = Math.sqrt(Math.pow(Ur, 2) + Math.pow(Ux, 2));
console.log("Ucc:", Ucc.toFixed(2));

console.log("--------------------------------------------------")



voltagedrop08 = ((Ur * 0.8) + (Ux * 0.6)) + ((1 / 200) * ((Ux * 0.8) - (Ur * 0.6)));
console.log("Voltage Drop at 0.8 power factor:", voltagedrop08.toFixed(2));

voltagedropunity = Ur + ((1 / 200) * (Math.pow(Ux, 2)));
console.log("Voltage Drop at unity power factor:", voltagedropunity.toFixed(2));

voltagelv08 = 400 * (1 - (voltagedrop08 / 100));
console.log("Voltage LV at 0.8 power factor:", voltagelv08.toFixed(2));

Tsclv = 1.768 * (Math.pow((Ucc / δlv), 2));
console.log("Tsclv:", Tsclv.toFixed(2));

Tschv = 1.768 * (Math.pow((Ucc / δhvpos7), 2));
console.log("Tschv:", Tschv.toFixed(2));
console.log("--------------------------------------------------")

Tsclv>Tschv? (Tsc=parseInt(Tschv)):(Tsc=parseInt(Tsclv))

tempcoillv = 105 + (8.2 * Math.pow(((100 / Ucc) * δlv), 2) * Tsc * 0.001);
console.log("Temp Coil LV:", tempcoillv.toFixed(2));

tempcoillv>250?console.log("------------bigger than 250------------"):console.log("------------accepted------------");

tempcoilhv = 105 + (8.2 * Math.pow(((100 / Ucc) * δhvpos7), 2) * Tsc * 0.001);
console.log("Temp Coil HV:", tempcoilhv.toFixed(2));
tempcoilhv>250?console.log("------------bigger than 250------------"):console.log("------------accepted------------");

return(
        <>
        <h1>impedance</h1>
        </>
    )
}
export default Impedance;
