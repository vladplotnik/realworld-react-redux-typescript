import * as React from 'react';
import ArticleList from './ArticleList';
import PopularTags from './Tags';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';

export default function ArticleFeed() {
    return (
        <div className="home-page">
            <Banner />
            <Container>
                <ArticleList />
                <Sidebar>
                    <PopularTags />
                </Sidebar>
            </Container>
        </div>
    )
}
