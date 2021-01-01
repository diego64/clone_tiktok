import styled from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
`;

function Index() {
    return <Title>Clone TikTok</Title>
}

export default Index;