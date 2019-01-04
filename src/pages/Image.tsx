import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col, Alert } from 'reactstrap';

import Photo from '../components/Photo/View';
import { IPhoto } from '../components/Photo/types';
import PageTitle from '../components/PageTitle/View';
import { PHOTOS } from '../constants/api';

interface IProps extends RouteComponentProps<{ id: string }>{};

interface IState {
    isLoading: boolean;
    photo: IPhoto|null;
    errors: Error[]
}

class ImagePage extends Component<IProps, IState>  {
    public state = {
        photo: null,
        isLoading: true,
        errors: [],
    }
    public componentDidMount() {
        this.fetchPhoto();
    }

    public fetchPhoto() {
        const { id } = this.props.match.params;
        fetch(`${PHOTOS}/${id}`)
            .then((resp: Response) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw Error('Image not found');
            })
            .then((photo: IPhoto) => this.setState({ photo, isLoading: false, }))
            .catch((error) => this.setState(({ errors, ...prevState}) => ({
                ...prevState,
                errors: errors.concat([error]),
                isLoading: false,
                photo: null,
            })));
    }

    public renderLoading() {
        return (
            <Col xs={12} sm={{ size:6, offset: 3 }}>
                <Alert color="info" className="text-center">
                    Loading...
                </Alert>
            </Col>
        )
    }

    public renderPhoto() {
        const { photo } = this.state;
        return photo 
            ? (
                <Col xs={12} className="text-center">
                    <Photo {...photo}/>
                </Col>
            ) 
            : (
                <Col xs={12} sm={{ size:6, offset: 3 }}>
                    <Alert color="warning" className="text-center">
                        There is no such photo.
                    </Alert>
                </Col>
            );
    }

    public render() {
        const title = 'Photo example';
        const description = `Something short and leading about the collection below—its contents, the creator,
        etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.`;
        const { isLoading } = this.state;
        return (
            <main role="main">
                <PageTitle {...{ title, description }} />
                <Container className="pt-4">
                    <Row>
                        {isLoading ? this.renderLoading() : this.renderPhoto()}
                    </Row>
                </Container>
            </main>
        )
    }
}

export default ImagePage;
