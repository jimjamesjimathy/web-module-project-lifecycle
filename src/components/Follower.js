import React from "react";


class Follower extends React.Component {
    render() {
        const { follower } = this.props;

        return(
            <div className='follower'>
                <img src={follower.avatar_url} width='250'></img>
                <a target='_blank' href={follower.html_url}><h3>{follower.login}</h3></a>
            </div>
        )
    }
}

export default Follower;