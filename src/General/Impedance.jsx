function Impedance(){
//     let Thicklvradial = 28.2,
//     Thickhilo = 10.5,
//     Thickhv = 48.2,
//     Ratedpower = 1000,
//     Helechv = 380,
//     Totalloadlosses = 9077.5,
//     Dmlv = 222.7,
//     Dmtr = 261.4,
//     Dmhv = 320.8,
//     F = 50,
//     Turnsatcentertap = 682,
//     Iphhv = 31.75,
    
//     Kf=0.0,
//     Ur=0.0,
//     Uxtemp=0.0,
//     Ux=0.0,
//     Ucc=0.0;
    
// Kf = 1-((Thicklvradial + Thickhilo + Thickhv)/((22/7)*Helechv))

// Ur = Totalloadlosses/(Ratedpower*10)

// Uxtemp = 2.4805*0.00001*F*0.000001*Kf*(((Dmlv*Thicklvradial)/3)+(Dmtr*Thickhilo)+((Dmhv*Thickhv)/3))*(Math.pow((Turnsatcentertap * Iphhv), 2))*(300/(Ratedpower*Helechv))
// Ux = Uxtemp*1.05

// Ucc = Math.sqrt(Math.pow(Ur, 2) + Math.pow(Ux, 2))

// voltagedrop08 = ((Ur*0.8)+(Ux*0.6))+((1/200)*((Ux*0.8)-(Ur*0.6)))

// voltagedropunity = (Ur)+((1/200)*(Math.pow(Ux, 2)))

// voltagelv08 = LV*(1-(voltagedrop08/100))

// Tsclv = 1.768*(Math.pow((Ucc/δlv), 2))
// Tschv = 1.768*(Math.pow((Ucc/δhv), 2))

// tempcoillv = 105 + (8.2*Math.pow(((100/Ucc)*δlv),2)*3*0.001)
// tempcoilhv = 105 + (8.2*Math.pow(((100/Ucc)*δhv),2)*3*0.001)


return(
        <>
        <h1>impedance</h1>
        </>
    )
}
export default Impedance;