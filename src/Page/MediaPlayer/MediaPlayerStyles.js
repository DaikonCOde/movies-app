import styled from "styled-components";

import { ContentIconsGlobal } from "../../Styles/Globals/Icons";

export const ContentMediaPlayer = styled.section`
  background: ${ props => props.theme.colors.dark };
  min-height: 100vh;
  height: 100%;
  width:100%;
  position: relative;
  .frameVideo {
    background: ${ props => props.theme.colors.gray[10]};
  }
  .title {
    padding: 10px 15px;
  }
` 