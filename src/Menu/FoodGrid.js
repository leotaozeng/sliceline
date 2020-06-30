import styled from 'styled-components'

export const FoodGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const FoodLabel = styled.div`
  position: absolute;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`

export const Food = styled.li`
  height: 100px;
  padding: 10px;
  border-radius: 0.3rem;
  background: ${({ image }) => `url(${image}) no-repeat center/cover`};
  filter: contrast(75%);
  font-family: 'Righteous', cursive;
  font-size: 20px;
  box-shadow: 0 0.125rem 0.25rem grey;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
