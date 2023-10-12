import styled from "styled-components";
import { Link } from "react-router-dom";

export const SongItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  text-decoration: none;
`;

export const SongItemImg = styled.img`
  width: 166px;
  border-radius: 8px;
`;

export const SongItemName = styled.p`
  font-size: 18px;
  color: #f8fafc;
  font-weight: 600px;
  font-family: Arial;
  width: 166px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongItemLink = styled(Link)``;
