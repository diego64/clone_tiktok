import { Container } from "../Header/styles";

function  Feed({posts}) {
    return (
        <Container>
           {posts.map((post, index) => (
                <PostCard key={index} post={post}></PostCard>
                ))}
        </Container>
    );
}