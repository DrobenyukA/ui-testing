import React from 'react';

import Album from '../components/Album/View';
import PageTitle from '../components/PageTitle/View';

interface IProps {};

export default function HomePage(props: IProps) {
    const title = 'Album example';
    const description = `Something short and leading about the collection below—its contents, the creator,
    etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.`
    return (
        <main role="main">
            <PageTitle {...{ title, description }} />
            <Album />
        </main>
    )
}