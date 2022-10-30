import { useQuery } from '@tanstack/react-query';
import { GetPost } from '../../util/API/ClinetAPI';
import Post from '../Post/Post';
import './Posts.scss';

const Posts = () => {

     const { isLoading, error, data } = useQuery(["posts"], async () =>{
            return await GetPost();
        })
    console.log(data?.data);
    return (
        <div className="posts">
            {error
                ? "Something went wrong"
                : isLoading
                ? "Loading...."
                : data?.data.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
}

export default Posts