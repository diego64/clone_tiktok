import Layout from '../components/Layout';
import Feed from '../components/Feed';

function Index({ posts }) {
    return (
        <Layout>
            <Feed posts={posts}></Feed>
            {/*<Suggestions></Suggestions>*/}
        </Layout>)
}

export async function getServerSideProps(context) {
    //Busca de dados no Banco de dados (MongoDB)

        const data = [
            {
                id: 1,
                author: {id: 1, 
                    avatar: '/images/download2.png', 
                    name: 'Diego Ferreira', 
                    username: 'diegof'
                },
                desription: 'Descrição',
                tags: [{title: '#youtube'}, {title:'//#clonetiktok'}],
                songName: 'musica',
                videoUrl: 'video',
                likes: 650,
                comments: 10,
                replies: 50
            },

            {
                id: 2,
                author: {id: 1, 
                    avatar: '/images/download2.png', 
                    name: 'Diego Ferreira', 
                    username: 'diegof'
                },
                desription: 'Descrição2',
                tags: [{title: '#youtube'}, {title:'//#clonetiktok'}],
                songName: 'musica2',
                videoUrl: 'video2',
                likes: 650,
                comments: 10,
                replies: 50
            }
        ]

    return {
        props: {
            posts: data,
        },
    }
}

export default Index;