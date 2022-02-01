import styled from "styled-components";

export const Card = styled.article`
background-color: ${ props => props.theme.colors.gray[30] };
  background: url(${props => props.img}) center no-repeat;
  background-size: cover;
  border-radius: ${ props => props.theme.radius.xs };
  padding: 13px 15px;
  position: relative;
  width: 100%;
`