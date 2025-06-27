import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';
import { setSpec, selectSpec } from './../../database/specsSlice';

function Taps() {
  const dispatch = useDispatch();

  const defaultValues = [105, 102.5, 100, 97.5, 95, 92.5, 90];
  const [tapCount, setTapCount] = useState(defaultValues.length);
  const [tapValues, setTapValues] = useState({});
  const [savedValues, setSavedValues] = useState({});

  useEffect(() => {
    const initial = {};
    defaultValues.forEach((val, idx) => {
      initial[`tap${idx + 1}`] = val;
    });
    setTapValues(initial);
  }, []);

  const handleMainInputChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setTapCount(isNaN(count) ? 0 : count);
  };

  const handleInputChange = (index, value) => {
    setTapValues((prev) => ({
      ...prev,
      [`tap${index}`]: value,
    }));
  };
    
  const HV = useSelector((state) => selectSpec(state, 'HV'));

  const saveValues = () => {
    setSavedValues(tapValues);
    dispatch(setHV({ key: 'Tapvalueshv', value: tapValues}));
    let voltages = [];
  Object.values(tapValues).forEach((val) => {
    const numericVal = parseFloat(val);
    voltages.push(((numericVal / 100) * HV)*1000);
  });
    dispatch(setHV({ key: 'Voltages', value: voltages}));
  };

  return (
    <div>
      <input
        type="number"
        defaultValue={tapCount}
        onChange={handleMainInputChange}
      />
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: tapCount }, (_, i) => (
          <div key={i}>
            <label>{`tap${i + 1}`}</label>
            <input
              type="text"
              name={`tap${i + 1}`}
              value={tapValues[`tap${i + 1}`] || ''}
              onChange={(e) => handleInputChange(i + 1, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button style={{ marginTop: '20px' }} onClick={saveValues}>
        Save Taps
      </button>
    </div>
  );
}

export default Taps;

