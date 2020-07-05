import styled from 'styled-components'

export const FoodGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const Food = styled.li`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 0.3rem;
  font-family: 'Righteous', cursive;
  font-size: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.25rem grey;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 5px 10px grey;

    > a {
      filter: contrast(100%);
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`

export const FoodLabel = styled.h2`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  padding: 5px;
  border-radius: 0.2rem;
  font-family: 'Righteous', cursive;
  font-size: inherit;
  font-weight: normal;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
`

export const FoodLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
  filter: contrast(75%);
  box-sizing: border-box;
  transition: all 0.4s;
`
