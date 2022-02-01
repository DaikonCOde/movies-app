import styled from "styled-components";
import { RatingMovie } from "../../Styles/Globals/Title";

export const ContentSingleMovie = styled.section`
  background: ${ props => props.theme.colors.dark };
  min-height: 100vh;
  height: 100%;
  padding: 0 0 30px 0;
  width: 100%;
`

export const HeroMovie = styled.div`
  background: url( ${ props => props.img } ) center no-repeat;
  width: 100%;
  height: 250px;
  position: relative;
  background-size: cover;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${ props => props.theme.colors.opacity[50] };
  }
`

export const PosterMovie = styled.div`
  width: 100px; 
  height: 150px;
  position: relative;
  margin: 0 15px 0 auto;
  transform: translateY(115%);
  background: ${ props => props.theme.colors.gray[10]};
  border-radius: ${ props => props.theme.radius.xs };

  img {
    border-radius: ${ props => props.theme.radius.xs };
    width: 100%;
    object-fit: contain;
  }
  .btnPlay {
    width: 35px;
    height: 35px;
    position: absolute;
    top: calc(50% - 17.5px);
    left: calc(50% - 17.5px);
    &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    }
  }
`

export const StatisticsMovie = styled.div`
  position: relative;
  padding: 10px 15px;
  transform: translateY(100%);
`

export const RuntimeMovie = styled(RatingMovie)`
  display: inline-block;
  margin: 0 0 0 20px;
`

export const BodyMovie = styled.div`
  padding: 20px 15px;
  .titleMovie {
    font-size: 18px;
    line-height:20px;
    max-width: calc(100% - 130px) ;
  }
`

export const ListCategories = styled.ul`
  margin: 40px auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  height: auto;
  padding: 10px;
  background: ${ props => props.theme.colors.gray[10] };
  border-radius: ${ props => props.theme.radius.s };
  color: ${ props => props.theme.colors.light };
  li {
    font-size: 12px;
    white-space: nowrap;
    background-color: ${ props => props.theme.colors.gray[30]};
    padding: 5px 8px;
    border-radius: ${ props => props.theme.radius.s };
  }
`

export const Overview = styled.div`

  .overview {
    font-size: 14px;
    color: ${ props => props.theme.colors.gray[70]}
  }
`