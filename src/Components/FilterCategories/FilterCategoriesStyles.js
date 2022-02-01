import styled from "styled-components";

export const ContentFilterCategories =  styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  width: 100%;
  gap: 0 5px;
  padding: 0 0 10px 0;
`

export const Category = styled.li`
  font-size: 13px;
  color: ${ props => props.theme.colors.light };
  padding: 10px 12px;
  height: fit-content;
  width: fit-content;
  display: inline-block;
  white-space: nowrap;
  background: ${ props => props.theme.colors.gray[10] };
  border-radius: ${ props => props.theme.radius.s };
  transition: all .3s linear;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    cursor: pointer;
  }
`