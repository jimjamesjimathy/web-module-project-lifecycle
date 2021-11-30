import React from "react";


class User extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user);
        return(
            <section className='User'>
                <div className='UserImg'>
                    <img src={user.avatar_url} width='350'></img>
                    <a target='_blank' href={user.html_url}><h3>{user.name}</h3></a>
                </div>
                <div className="UserInfo">
                    <p><strong>Username: </strong> {user.login}</p>
                    <p><strong>Total Repos: </strong> {user.public_repos}</p>
                    <p><strong>Total Followers: </strong>{user.followers}</p>
                </div>
            </section>
        )
    }
}

export default User;