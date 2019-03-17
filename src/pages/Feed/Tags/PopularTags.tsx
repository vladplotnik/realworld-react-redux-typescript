import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../reducer';
import { getTags } from './actions';
import TagPill from './TagPill';

interface StateFromProps {
    tags: string[]
}

interface DispatchFromProps {
    getTags: () => void
}

class PopularTags extends React.Component<StateFromProps & DispatchFromProps> {
    componentDidMount() {
        this.props.getTags();
    }

    render() {
        const tags = this.props.tags && this.props.tags.map((tag: string) => <TagPill key={tag} name={tag} />);

        return (
            <React.Fragment>
                <p>Popular Tags</p>

                <div className="tag-list">{tags}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        tags: state.feed.tags
    };
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        getTags: () => dispatch(getTags())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularTags);
