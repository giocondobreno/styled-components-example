import styled from 'styled-components'

interface PostCardProps {
  width?: number
}
export const PostCardWrapper = styled.article<PostCardProps>`
  width: ${(props) => `${props.width}px`};
  color: #f00;

  /* Encadeamento */
  span {
    font-size: 0.8rem;
  }
`
export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes.large}rem;
`
export const Description = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => props.theme.colors.primary};
`
/* Herança de Estilização */
export const HightlightedDescription = styled(Description)`
  background: #000;
`
