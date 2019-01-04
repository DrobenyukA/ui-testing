import React from 'react';

import { IPhoto } from './types';

interface IProps extends IPhoto {}

export default function Photo({ title, url }: IProps) {
    return (
        <>
            <h2>{title}</h2>
            <img src={url} alt={title}/>
        </>
    )
}
