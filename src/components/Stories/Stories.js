import { useContext } from "react";
import { authContext } from '../context/authContext';
import { storiesData } from './constant';
import './Stories.scss';

const Stories = () => {
    const { currentUser } = useContext(authContext);

  return (
      <div className="stories">
          <div className="story">
              <img src={currentUser?.profilePic} alt="story.name" />
              <span>{currentUser?.name}</span>
              <button>+</button>
          </div>
          {storiesData.map((story) => (
              <div key={story.id} className="story">
                  <img src={story.img} alt="story.name" />
                  <span>{story.name}</span>
              </div>
          ))}
      </div>
  );
}

export default Stories