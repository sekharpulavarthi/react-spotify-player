import styled from "styled-components";

export const PlayListSongItemContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;

export const PlayListSongItemValue = styled.li`
  flex: 1;
  text-align: center;
  padding: 10px;
`;

export const PlayListSongItemCountValue = styled.p`
  color: #ffffff;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
