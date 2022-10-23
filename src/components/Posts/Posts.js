import Post from '../Post/Post';
import { PostData } from './constant';
import './Posts.scss';

const Posts = () => {
  return (
      <div className="posts">
          {PostData.map((post) => (
              <Post key={post.id} post={post} />
          ))}
      </div>
  );
}

export default Posts