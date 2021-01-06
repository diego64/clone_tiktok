import Layout from '../components/Layout';

function Index({posts =[]}) {
    return <Layout>
        <Feed posts={posts}></Feed>
        <Suggestions></Suggestions>
    </Layout>
}

export default Index;