import React, { CSSProperties } from 'react';

export default function Placeholder() {
    const styles: CSSProperties = {
        fontSize: '1.125rem',
        textAnchor: 'middle',
    };

    return (
        <svg
            role="img"
            width="100%"
            height="225"
            style={styles}
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Thumbnail"
            className="bd-placeholder-img card-img-top"
        >
            <title>Placeholder</title>
            <rect fill="#55595c" width="100%" height="100%" />
            <text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text>
        </svg>
    )
};
