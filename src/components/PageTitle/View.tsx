import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

interface IProps {
    title: string;
    description?: string;
}

export default function PageTitle({ title, description }: IProps) {
    return (
        <Jumbotron tag="section" className="text-center mb-0" fluid={true}>
            <Container>
                <h1 className="jumbotron-heading">{title}</h1>
                {description && (<p className="lead text-muted">{description}</p>)}
            </Container>
        </Jumbotron>
    )
}