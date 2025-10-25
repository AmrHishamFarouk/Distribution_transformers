import React, { useEffect,useState } from 'react';
import { setGeneral, selectGeneral} from '../../database/generalSlice';
import HeightFoil from '../../assets/heights/HeightFoil.png'
import { setLV, selectLV } from '../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Bars(){
  const dispatch = useDispatch();
  const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
  const Hardboardlv = useSelector((state) => selectLV(state, 'Hardboardlv'));
  const Hcoil =  useSelector((state) => selectGeneral(state, 'Hcoil'));
  const Iphlv = useSelector((state) => selectLV(state, 'Iphlv'));
 
  const Barslv = useSelector((state) => selectLV(state, 'Barslv'));
const Barslengthlv = useSelector((state) => selectLV(state, 'Barslengthlv'));

useEffect(() => {
  console.log('Barslv:', Barslv);
  console.log('Barslengthlv:', Barslengthlv);
}, [Barslv, Barslengthlv]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [useCustom, setUseCustom] = useState(false);
  const [selected, setSelected] = useState(null);
  const [customThickness, setCustomThickness] = useState('');
  const [customLength, setCustomLength] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: '4x40', thickness: 4, length: 40 },
    { label: '5x50', thickness: 5, length: 50 },
    { label: '6x60', thickness: 6, length: 60 },
    { label: '8x80', thickness: 8, length: 80 },
    { label: '8x100', thickness: 8, length: 100 },
    { label: '9x90', thickness: 9, length: 90 },
    { label: '10x100', thickness: 10, length: 100 },
    { label: '10x120', thickness: 10, length: 120 }
  ];

const handleSelect = (option) => {
  setSelected(option);
  setIsDropdownOpen(false);

  dispatch(setLV({ key: 'Barslv', value: option.thickness }));
  dispatch(setLV({ key: 'Barslengthlv', value: option.length }));
};


  const toggleCustom = () => {
    setUseCustom(true);
    setIsDropdownOpen(false);
    setSelected(null);
  };

    return(
      <div style={{ width: '280px', fontFamily: 'sans-serif' }}>
      {!useCustom && (
        <>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              padding: '10px',
              backgroundColor: '#222',
              color: '#0ff',
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            {selected ? `${selected.label}` : 'Select Bar'}
          </div>
          {isDropdownOpen && (
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '4px'
              }}
            >
              {options.map((option) => (
                <li
                  key={option.label}
                  onClick={() => handleSelect(option)}
                  style={{ padding: '5px 0', cursor: 'pointer' }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {useCustom && (
        <div style={{ marginBottom: '10px' }}>
          <input
            type="number"
            placeholder="Thickness"
            value={customThickness}
            onChange={(e) => {
              const value = e.target.value;
              setCustomThickness(value);
              dispatch(setLV({ key: 'Barslv', value: Number(value) }));
            }}
            style={{ marginRight: '10px', padding: '5px' }}
          />

          <input
            type="number"
            placeholder="Length"
            value={customLength}
            onChange={(e) => {
              const value = e.target.value;
              setCustomLength(value);
              dispatch(setLV({ key: 'Barslengthlv', value: Number(value) }));
            }}
            style={{ padding: '5px' }}
          />
        </div>
      )}

{!useCustom ? (
    <button
      onClick={toggleCustom}
      style={{
        padding: '8px 12px',
        backgroundColor: '#0ff',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Custom Bars
    </button>
  ) : (
    <button
      onClick={() => setUseCustom(false)}
      style={{
        padding: '8px 12px',
        backgroundColor: '#f0f',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Back to Options
    </button>
  )}

    </div>
  );
};
export default Bars;