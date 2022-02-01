import styled from "styled-components";
import { ContentIconsGlobal } from "../../Styles/Globals/Icons";

export const ContentSearch = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${ props => props.theme.colors.dark };
  padding: 20px 30px;
  z-index: 10;
  transform: ${props => props.isOpen ? ' translateX(0)': 'translateX(100%)'};
  transition: all .3s linear;
`
export const ContentIcon = styled(ContentIconsGlobal)`
  width: fit-content;
  margin: 0 0 20px auto;
  line-height:0;
  font-size: 30px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const ContentForm = styled.form`
  display: flex;

  .inputTitle{
    background: ${ props => props.theme.colors.gray[30] };
    padding: 10px 12px;
    border-radius: ${ props => props.theme.radius.s };
    width: 100%;
    color: ${ props => props.theme.colors.light};
    &::placeholder {
      color: ${ props => props.theme.colors.gray[70] }
    }
  }
`

export const ButtonSubmit = styled(ContentIconsGlobal)`
  background: ${ props => props.theme.colors.secondary[1]};
  border-radius: ${ props => props.theme.radius.s};
  margin: 0 0 0 10px;
  line-height: 0;
`

export const ContentResultSearch = styled.div`
  margin: 30px 0 0 0;
  .contentCards {
    overflow-y: auto;
    max-height: 400px;
    padding: 0 0 20px 0;
  }
  .notFound{
    color: ${ props => props.theme.colors.light }
  }
`