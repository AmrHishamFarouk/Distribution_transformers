import React from 'react';
import { useSelector } from 'react-redux';
import { selectIphlv, selectWiretypelv } from './lvSlice';

const Trial = () => {
  const Iphlv = useSelector(selectIphlv);
  const Wiretypelv = useSelector(selectWiretypelv);

  return (
    <div>
      <p>Iphlv: {Iphlv}</p>
      <p>Wire Type: {Wiretypelv}</p>
    </div>
  );
};

export default Trial;
