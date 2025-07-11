import Specs from './Specs'
import Calc1 from './Calc1'
import Lv4 from './LV/Lv4';
import Lv3 from './LV/Lv3';
import Lv2 from './LV/Lv2';
import Lv1 from './LV/Lv1';
import Heightlv from './LV/Heightlv';
import Hv4 from './HV/Hv4';
import Hv3 from './HV/Hv3';
import Hv2 from './HV/Hv2';
import Hv1 from './HV/Hv1';
import Heighthv from './HV/Heighthv';
import Core from './General/Core/Core';
import Impedance from './General/Impedance';
import Ironcore from './General/Ironcore';
import Mechanicalforces from './General/Mechanicalforces';
import HiLo from './General/HiLo';
import { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = [<Specs/>,<Calc1/>,<Core/>,<Lv1/>,<Heightlv/>,<Lv2/>,<Lv3/>,<Lv4/>,<HiLo />,<Hv1/>,<Hv2/>,<Heighthv/>,<Hv3/>,<Hv4/>,<Impedance/>,<Ironcore/>,<Mechanicalforces/>];
  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1); // Increment index only if it's not the last one
  }
  };
  return (
    <div>
        {pages[currentIndex]}
        <center><button onClick={handleNext}>Next</button></center>
    </div>
    );
}


export default App;
