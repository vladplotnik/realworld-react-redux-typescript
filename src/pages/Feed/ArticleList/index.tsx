import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../reducer';
import { Article } from '../reducer';
import ArticlePreview from './ArticlePreview';
import Pagination from '../../../components/Pagination';
import { getArticles } from './actions';

interface StateFromProps {
    articles: Article[],
    pageLimit: number,
    pageNumber: number
}

interface DispatchFromProps {
    getArticles: (pageLimit: number, pageNumber: number) => void
}

class ArticleList extends React.Component<StateFromProps & DispatchFromProps> {
    componentDidMount() {
        const { pageLimit, pageNumber } = this.props;
        this.props.getArticles(pageLimit, pageNumber);
    }

    shouldComponentUpdate(nextProps: StateFromProps & DispatchFromProps){
        return this.props.articles !== nextProps.articles;
    }

    handlePage = (pageNumber: number) => {
        const { pageLimit } = this.props;
        this.props.getArticles(pageLimit, pageNumber);
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
                < Pagination activePage={this.props.pageNumber} totalPages={this.props.pageLimit} handlePage={this.handlePage} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        articles: state.feed.articles,
        pageLimit: state.feed.pageLimit,
        pageNumber: state.feed.pageNumber
    };
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        getArticles: (pageLimit: number, pageNumber: number) => dispatch(getArticles(pageLimit, pageNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
