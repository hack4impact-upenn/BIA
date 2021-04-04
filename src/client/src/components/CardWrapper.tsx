import React, { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import CardsList from './CardList.tsx';
import ExpandedCard from './ExpandedCard.tsx';

let currOrg = {
  name: '',
  yearFounded: '',
  location: '',
  tags: [],
  shortDisc: '',
  longDisc: '',
  facebook: '',
  website: '',
};

const CardWrapper = () => {
  const [state, setState] = useState('list');
  const switchToExpanded = (org) => {
    currOrg = org;
    setState('expanded');
  };

  const switchToList = () => {
    setState('list');
  };
  return (
    <div>
      {state === 'list' && <CardsList switch={(o) => switchToExpanded(o)} />}

      {state === 'expanded' && (
        <ExpandedCard org={currOrg} switchToList={() => switchToList} />
      )}
    </div>
  );
};
export default CardWrapper;
