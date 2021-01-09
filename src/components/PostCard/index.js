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
            <Actions></Actions>
        </Container>
    );
}