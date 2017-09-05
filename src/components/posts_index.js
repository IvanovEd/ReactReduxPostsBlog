import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
        console.log('good time to fetch');
    }

    render() {
        return (

            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add new Post
                    </Link>
                </div>
                List of posts
            </div>
        );
    }
}
//instead {fetchPosts: fetchPosts} -> {fetchPosts} in connect
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }



export default connect(null, {fetchPosts})(PostsIndex);