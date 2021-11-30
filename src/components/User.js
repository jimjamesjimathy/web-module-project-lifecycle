import React from "react";


class User extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user);
        return(
            <section className='User'>
                <div className='UserImg'>
                    <img src={user.avatar_url}></img>
                    <a target='_blank' href={user.html_url}><h3>{user.name}</h3></a>
                </div>
                <div className="UserInfo">
                    <p>{user.login}</p>
                    <p>Total Repos: {user.public_repos}</p>
                    <p>Total Followers: {user.followers}</p>
                </div>
            </section>
        )
    }
}

export default User;