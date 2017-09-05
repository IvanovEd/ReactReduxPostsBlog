import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

const Greeting = () => {
    return <div>Hey muthefucker!</div>;
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="/greet" component={Greeting}/>
        <Route path="posts/new" component={PostNew}/>
    </Route>
);

