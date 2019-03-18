import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../reducer';
import { Article } from '../reducer';
import ArticlePreview from './ArticlePreview';
import Pagination from '../../../components/Pagination';
import { getArticles } from './actions';

interface StateFromProps {
    articles: Article[]
}

interface DispatchFromProps {
    getArticles: (limit: number) => void
}

class ArticleList extends React.Component<StateFromProps & DispatchFromProps> {
    componentDidMount() {
        this.props.getArticles(10);
    }

    render() {
        const articles = this.props.articles && this.props.articles.map(article => (
            <ArticlePreview
                key={`article-${article.title}`}
                article={article}
            />
        ));

        return (
            <div className="col-md-9">
                <div className="feed-toggle">
                    <ul className="nav nav-pills outline-active">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="">
                                Your Feed
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">
                                Global Feed
                            </a>
                        </li>
                    </ul>
                </div>
                {articles}
                < Pagination activePage={1} totalPages={10} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        articles: state.feed.articles
    };
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        getArticles: (limit: number) => dispatch(getArticles(limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
