import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render() {
        return(
            <div className='fList'>
                {
                    this.props.followers.map(follower => {
                        return(
                            <Follower key={follower.login} follower={follower} />
                        )
                    })
                }
            </div>
        )
    }
}

export default FollowerList;