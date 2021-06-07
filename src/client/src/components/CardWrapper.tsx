import React from 'react';
import { useState, useEffect } from 'react';
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

const CardWrapper = (props: any) => {
  const { data } = props;
  const { searchQuery } = props;
  const { filter } = props;
  const { targetCard } = props;
  const { changeTargetCard } = props;
  console.log(props);
  const [targetOrg, setOrg] = useState(targetCard);
  const [state, setState] = useState(targetCard ? 'expanded' : 'list');

  useEffect(() => {
    if (targetCard) {
      setState('expanded');
    }
  }, [targetCard]);

  const switchToExpanded = (org) => {
    setOrg(org);
    changeTargetCard(org);
    setState('expanded');
  };

  const switchToList = () => {
    setState('list');
  };
  return (
    <div style={{ height: '80vh' }}>
      {state === 'list' && (
        <CardsList
          data={data}
          searchQuery={searchQuery}
          filter={filter}
          switch={(o) => switchToExpanded(o)}
        />
      )}

      {state === 'expanded' && (
        <ExpandedCard org={targetCard} switchToList={() => switchToList} />
      )}
    </div>
  );
};
export default CardWrapper;
