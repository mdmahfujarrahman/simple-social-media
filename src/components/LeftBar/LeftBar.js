import { useContext } from 'react';
import { authContext } from '../context/authContext';
import { MainFeatures, OtherFeatures, Shortcuts } from './constant';
import './Leftbar.scss';

const LeftBar = () => {
    const { currentUser } = useContext(authContext);
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img
                            src={currentUser?.profilePic}
                            alt={currentUser?.name}
                        />
                        <span>{currentUser?.name}</span>
                    </div>
                    {MainFeatures.map((item) => (
                        <div key={item.id} className="item">
                            <img src={item.img} alt={item.Name} />
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