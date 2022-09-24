import { FC } from 'react';
import styled from 'styled-components';

import { EditorView } from './Editor';
import { MapView } from './Map';
import { QuestionView } from './Questions';

export const DashboardContainer: FC = () => (
  <Wrapper>
    <QuestionView />
    <EditorView />
    <MapView />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;

  > div {
    flex: 1;
    /* Temp border to see the demarcation */
    border: 1px solid black;
  }
`;

DashboardContainer.displayName = 'DashboardContainer';
