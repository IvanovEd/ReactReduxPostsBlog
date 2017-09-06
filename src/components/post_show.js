import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPostById} from '../actions/index';
import {deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPostById(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then( () => {this.props.router.push("/")});
    }

    render() {
        if(!this.props.post) {
            return <div>Loading...</div>;
        }
        const {post} = this.props;
        return (
            <div>
                <Link to="/"> Back to index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
                    Delete Post</button>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {post: state.posts.post}
}

export default connect(mapStatetoProps, {fetchPostById, deletePost})(PostShow);