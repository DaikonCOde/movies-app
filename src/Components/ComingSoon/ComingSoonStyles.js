import styled from "styled-components";
import { Title } from "../../Styles/Globals/Title";
import { Card } from "../../Styles/Globals/Card";
import { ButtonPlayGlobal } from "../../Styles/Globals/ButtonPlayGlobal";

export const ContentComingSoon = styled.div`
  margin: 20px 0;
  padding: 0 30px;
  width: 100%;
`
export const ContentMovies = styled(Card)`
  height: 200px;
  max-width: 350px;
  min-width: 300px
`
export const TitleMovie = styled(Title)`
  font-size: 16px;
  margin: 0;
`

export const ButtonPlay = styled(ButtonPlayGlobal)`
  height: 40px;
  left: calc(50% - 20px);
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
`