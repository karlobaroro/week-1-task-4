import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {
    state = {
        post: []
    }

    componentDidMount = () => {
        let url = "https://hub.dummyapis.com/employee?noohfRecords=10&idStarts=1001";

        axios.get(url).then(res => {
            this.setState({
                post: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        const postList = this.state.post.length ? (<div>
            {this.state.post.map(user => {
                return (
                    <div class="col s3">
                        <React.Fragment key={user.id}>
                            <img src={user.imageUrl} alt="img" />
                            <p>{user.firstName} {user.lastName}</p>
                            <p>{user.email}</p>
                        </React.Fragment>
                    </div>
                )
            })}
        </div>) : (<p>No post yet</p>)

        return (
            <>
                <div class="row">
                    {postList}
                </div>
            </>
        );
    }
}

export default Home;