import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Song,
  Tag,
  Content,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action,
  ButtonContainer,
} from './styles';

import Button from '../Button';

function PostCad({post}) {
    return (
        <Container>
            <Header>
                <PersonContainer>
                    <Avatar src={post?.author?.avatar}></Avatar>
                    <Info>
                        <Author>
                            {post?.author?.name}
                            <span>{post?.author?.name}</span>
                        </Author>
                        <Description>
                            <span>{post.description}</span>
                            {post?.tags.map((tag, index) => (
                                <Tag key={index}>{tag.title}</Tag>
                            ))}
                        </Description>
                    </Info>
                </PersonContainer>
                <ButtonContainer>
                    <Button fontSiza={14} outlined>Seguir</Button>
                </ButtonContainer>
            </Header>
            <Content>
                <Song>
                    <img src="/images/songIcon"></img>
                </Song>
                <VideoContainer>
                    <Video
                        src={post?.VideoUrl}
                        webkit-playsinline='true'
                        playsinline=''
                        loop='true'
                        preload='metadata'
                    ></Video>
                    <ActionsContainer>
                        <PlayerIcon src='/images/playIcon.svg'></PlayerIcon>
                    </ActionsContainer>
                </VideoContainer>
            </Content>
            <Actions>
                <Action>
                    <img></img>
                    <a></a>
                </Action>
                <Action>
                    <img></img>
                    <a></a>
                </Action>
                <Action>
                    <img></img>
                    <a></a>
                </Action>
            </Actions>
        </Container>
    );
}

export default PostCad;