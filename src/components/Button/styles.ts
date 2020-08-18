import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }
`;
