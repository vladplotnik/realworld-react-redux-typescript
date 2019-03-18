import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { Article } from '../reducer';
import { deleteArticle } from './actions';

export interface Props {
    article: Article;
    canModify: boolean;
}

interface DispatchFromProps {
    deleteArticle: (slug: string) => void
}

const ArticleActions = (props: Props & DispatchFromProps) => {
    const article = props.article;
    const del = () => {
        props.deleteArticle(article.slug);
    };

    return (
        <span>
            {props.canModify ?
                <div>
                    <Link
                        to={`/editor/${article.slug}`}
                        className="btn btn-outline-secondary btn-sm">
                        <i className="ion-edit"></i> Edit Article
                    </Link>

                    <button className="btn btn-outline-danger btn-sm" onClick={del}>
                        <i className="ion-trash-a"></i> Delete Article
                    </button>
                </div>
            : null}
        </span>
    );
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        deleteArticle: (slug: string) => dispatch(deleteArticle(slug))
    };
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
