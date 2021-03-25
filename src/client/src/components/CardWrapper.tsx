import React, { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import CardsList from './CardsList.tsx';
import ExpandedCard from './ExpandedCard.tsx';

const CardWrapper = () => {
  let currOrg;
  const [state, setState] = useState('list');
  const switchToExpanded = (org) => {
    setState('expanded');
    currOrg = org;
  };

  const switchToList = () => {
    setState('list');
  };
  return (
    <div>
      {state === 'list' && <CardsList switchToExpanded={switchToExpanded} />}

      {state === 'expanded' && (
        <ExpandedCard org={currOrg} handleClick={() => switchToList} />
      )}
    </div>
  );
};
export default CardWrapper;
