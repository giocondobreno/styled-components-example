import {
  Description,
  HightlightedDescription,
  PostCardWrapper,
  Title,
} from './styles'

export function PostCard() {
  return (
    <PostCardWrapper width={500}>
      <Title>Lorem Ipsum</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        aspernatur, assumenda reprehenderit, alias fugit perferendis vero
        obcaecati enim nemo sed quidem libero dicta quas, voluptas distinctio
        minima eius. <span>Praesentium, necessitatibus</span>.
      </Description>
      <HightlightedDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        aspernatur, assumenda reprehenderit, alias fugit perferendis vero
        obcaecati enim nemo sed quidem libero dicta quas, voluptas distinctio
        minima eius. <span>Praesentium, necessitatibus</span>.
      </HightlightedDescription>
    </PostCardWrapper>
  )
}
