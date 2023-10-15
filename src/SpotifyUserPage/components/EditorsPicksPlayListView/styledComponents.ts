import styled from "styled-components";

export const EditorsPicksPlayListViewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const PlayListHeaderPartUlContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 0;
  li {
    flex: 1;
    padding: 10px;
    font-weight: bold;
    text-align: center;
    border-right: 1px solid #ccc;
    &:last-child {
      border-right: none;
    }
  }
`;

export const PlayListHeaderPartLi = styled.li`
  flex: 1;
  text-align: center;
`;
