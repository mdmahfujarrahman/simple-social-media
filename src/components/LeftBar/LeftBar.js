import { MainFeatures, OtherFeatures, Shortcuts } from './constant';
import './Leftbar.scss';

const LeftBar = () => {
  return (
      <div className="leftbar">
          <div className="container">
              <div className="menu">
                  <div className="user">
                      <img
                          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
                          alt=""
                      />
                      <span>Mahfuj</span>
                  </div>
                  {MainFeatures.map((item) => (
                      <div key={item.id} className="item">
                          <img src={item.img} alt="" />
                          <span>{item.Name}</span>
                      </div>
                  ))}
              </div>
              <hr />
              <div className="menu">
                  <span className="menu-title">Your Shortcuts</span>
                  {Shortcuts.map((item) => (
                      <div key={item.id} className="item">
                          <img src={item.img} alt="" />
                          <span>{item.Name}</span>
                      </div>
                  ))}
              </div>
              <hr />
              <div className="menu">
                  <span className="menu-title">Others</span>
                  {OtherFeatures.map((item) => (
                      <div key={item.id} className="item">
                          <img src={item.img} alt="" />
                          <span>{item.Name}</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default LeftBar