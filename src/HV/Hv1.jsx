function Hv1(){
    // voltagetaps = get it from redux

    // function voltagescalculator(){
    //     let newvoltages =[];
        
    //     if(voltagetaps.length == 7){
    //         for(int i=105.0;i>=90.0;i-=2.5){
    //             newvoltages.append(HV*(i/100))
    //         }
    //         return newvoltages;
    //     }
        
    //     else{
    //         for(let i=0;i < voltagetaps.length;i++){
    //             newvoltages.append(HV*(voltagetaps[i]/100));
    //         }
    //         return newvoltages;
    //     }
        
    //     assign the centertap voltage to redux
    //     set centertapvoltage = ;
        
    // }
    
    // function tempturnscalculator(voltages){
    //     let tempturns =[];
    //     for(int i = 0; i<voltages.length;i++){
    //         let turns = voltages[i]/VT;
    //         tempturns.push(turns);
    //     }
    //     return tempturns;
    // }
    
    // const tempturns = tempturnscalculator(voltages);
    
    // function averagestepcalculator(tempturns){
    //     let averagestep = 0.0;
    //     for(int i = 0; i<tempturns.length;i++){
    //         averagestep = averagestep + tempturns[i];
    //     }
    //     averagestep = averagestep/tempturns.length;
    //     averagestep = math.round(averagestep);
    
    //     //dispatch when finished
    
    //     return averagestep;
    // }
    
    // const averagestep = averagestepcalculator(voltages);
    
    // const firstturns = tempturns[0].round;
    
    // let turns = [firstturns];
    
    // function newturns(){
    //     for(int i = 1;i < (tempturns.length-1);i++){
    //         turns.append(turns[i-1]+averagestep);
    //     }
    
    //     //dispatch when finished
    //     return;
    // }
    
    
    // actualVT = [];
    
    // function calculateactualVT(){
    //     for(int i = 0;i < (tempturns.length-1);i++){
    //         actualVT.append(voltages[i]/turns[i]);
    //     }
    //     //dispatch when finished
    // }
    
    // Tolerance = [];
    
    // function calculatetolerance(){
    //     for(int i = 0;i < (actualVT.length-1);i++){
    //         Tolerance.append((actualVT[i]/VT[i])-1);
    //     }
    //     //dispatch when finished
    // }

    return(
        <center><h1>Hv1</h1></center>
        // <>
        // {HV[0]}      {HV[0]/vtoriginal}
        // <br></br>

        // {HV[1]}      {HV[1]/vtoriginal}
        // <br></br>

        // {HV[2]}      {HV[2]/vtoriginal}
        // <br></br>

        // {HV[3]}      {HV[3]/vtoriginal}
        // <br></br>

        // {HV[4]}      {HV[4]/vtoriginal}
        // <br></br>

        // {HV[5]}      {HV[5]/vtoriginal}
        // <br></br>

        // {HV[6]}      {HV[6]/vtoriginal}
        // </>
    )
}
export default Hv1;