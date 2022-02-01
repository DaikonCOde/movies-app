import styled from "styled-components";
import { Card } from "../../Styles/Globals/Card";
import { ButtonPlayGlobal } from "../../Styles/Globals/ButtonPlayGlobal";

export const ContentCardMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`

export const ItemMovie = styled(Card)`
  width: 150px;
  height: 225px;
  padding: 0;
  display: flex;
  align-items: flex-end;
`
export const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 13px 5px 8px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(40,40,40,0.6) 50%, rgba(0,212,255,0) 100%);;
    height: 100%;
    width: 100%;
    border-radius: 0 0 14px 14px;
  }
`

export const InfoMovie = styled.div`
  width: 100%;
  color: ${ props => props.theme.colors.light };
  position: relative;
  .title {
    font-size: 16px;
    font-weight:500;
    line-height: 16px;
    margin: 0;
    width: 105px;
    overflow:hidden;
    word-break: break-all;  
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3; 
  }
  .rating {
    font-size: 12px;
    display: inline-block;
    margin: 0 0 5px;
    .iconStar {
      color: ${ props => props.theme.colors.secondary[2] };
      font-size: 16px;
      vertical-align: middle;
      line-height: 16px;
    }
  }
`

export const ButtonPlay = styled(ButtonPlayGlobal)`
  min-width: 30px;
  height: 30px;
  padding: 0;
  align-self: flex-end;
  position: relative;

`