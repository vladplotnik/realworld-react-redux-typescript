import ArticleMeta from './ArticleMeta';
import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { Article } from '../reducer';
import { AppState } from '../../../reducer';
import { getArticle } from './actions';
import { RouteComponentProps } from 'react-router';

interface StateFromProps {
    article?: Article;
    username?: string;
}

interface DispatchFromProps {
    getArticle: (slug: string) => void
}

class ArticlePage extends React.Component<StateFromProps & DispatchFromProps & RouteComponentProps<any>> {
    componentWillMount() {
        const { slug } = this.props.match.params;
        this.props.getArticle(slug);
    }

    render() {
        if (!this.props.article) {
            return null;
        }

        const markup = { __html: marked(this.props.article.body, { sanitize: true }) };
        const canModify = this.props.username === this.props.article.author.username;
        return (
            <div className="article-page">

                <div className="banner">
                    <div className="container">

                        <h1>{this.props.article.title}</h1>
                        <ArticleMeta
                            article={this.props.article}
                            canModify={canModify} />

                    </div>
                </div>

                <div className="container page">

                    <div className="row article-content">
                        <div className="col-xs-12">

                            <div dangerouslySetInnerHTML={markup}></div>

                            <ul className="tag-list">
                                {
                                    this.props.article.tagList.map(tag => {
                                        return (
                                            <li
                                                className="tag-default tag-pill tag-outline"
                                                key={tag}>
                                                {tag}
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                        </div>
                    </div>

                    <hr />

                    <div className="article-actions">
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        article: state.feed.currentArticle,
        username: state.user.userName
    };
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        getArticle: (slug: string) => dispatch(getArticle(slug))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
