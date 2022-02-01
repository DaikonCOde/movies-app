import styled from "styled-components"

export const ButtonPlayGlobal = styled.button`
  background: ${ props => props.theme.colors.secondary[1] };
  border-radius: 50%;
  color: ${ props => props.theme.colors.light };
  font-size: 25px;
  line-height: 0;
  text-align: center;
`