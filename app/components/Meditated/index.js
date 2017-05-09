/**
*
* Meditated
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  color: #f5a61e;
  font-size: 2em;
`;

const Text = styled.div`
  color: #cdcdcd;
`;

const BoldText = styled.div`
  color: black;
  font-size: 1.1em;
  margin-bottom: 20px;
`;

const Check = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15em;
  cursor: pointer;
  color: ${({ didMeditate }) => didMeditate ? '#3fc277' : '#cdcdcd'};

  i {
    border: 5px solid ${({ didMeditate }) => didMeditate ? '#3fc277' : '#cdcdcd'};
    border-radius: 1000px;
    padding: 24px;
  }
`;

const Meditated = ({ total, max, onClick, didMeditate }) => (
  <Container>
    <Icon>
      <i
        className={'fa fa-calendar'}
        aria-hidden={'true'}
      >
      </i>
    </Icon>
    <Text>
        This Week
      </Text>
    <Text>
      {total}/{max}
    </Text>
    <BoldText>
      {(() => didMeditate ?
          'Great!' :
          'Did you meditate today?'
        )()}
    </BoldText>
    <Check
      onClick={onClick}
      didMeditate={didMeditate}
    >
      <i
        className={'fa fa-check'}
        aria-hidden={'true'}
      >
      </i>
    </Check>
  </Container>
  );

Meditated.propTypes = {
  total: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  didMeditate: PropTypes.bool.isRequired,
};

export default Meditated;
