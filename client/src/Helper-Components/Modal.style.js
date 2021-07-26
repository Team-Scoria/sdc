import styled from 'styled-components';

export const Nothing = styled.div`
  display: none;
`;

export const Background = styled.body`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  opacity: 0.5;
  z-index: 1;
  position: fixed;
  overflow-y: hidden;
  `;

export const OverviewModal = styled.div`


`;

export const ComparisonModalContainer = styled.div`
  margin: auto;
  width: 400px;
  height: 300px;
  background-color: gray;
  z-index: 2;
  position: absolute;
  left: 50%;
`;

export const ComparisonModal = styled.div`
  width: 100%;
  height: 100%;

`;

export const NewReviewModal = styled.div`


`;

export const ReviewImageModal = styled.div`


`;