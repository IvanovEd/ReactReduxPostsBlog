import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostNew extends Component {
    buildClassName = (inputElement) => {
        return `form-group ${inputElement.touched && inputElement.invalid ? 'has-danger' : ''}`
    };

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
            this.context.router.push('/');
        });

    };

    render() {
        const {fields : {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create new Post</h3>
                <div className={this.buildClassName(title)}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={this.buildClassName(categories)}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={this.buildClassName(content)}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title'
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories'
    }
    if (!values.content) {
        errors.content = 'Enter a content'
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostNew);