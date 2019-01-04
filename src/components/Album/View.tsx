import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Photo from '../Photo/View';
import PhotoCard from '../Photo/Card';
import { IPhoto } from '../Photo/types';
import PhotoEditor from '../Photo/Editor';
import { PHOTOS } from '../../constants/api';
import * as ROUTES from '../../constants/routes';

interface IProps extends RouteComponentProps<{}>{};

interface IState {
    isLoading: boolean;
    selectedPhoto: IPhoto|null;
    errors: Error[];
    photos: IPhoto[];
};

class Album extends Component<IProps, IState> {
    public state: IState = {
        photos: [],
        errors: [],
        selectedPhoto: null,
        isLoading: true,
    }

    public componentDidMount() {
        this.fetchPhotos();
    }

    public handleSave = () => this.setState({ selectedPhoto: null });

    public handleCancel = () => this.setState({ selectedPhoto: null });

    public handleEdit(selectedPhoto: IPhoto) {
        return () => this.setState({ selectedPhoto });
    }

    public fetchPhotos() {
        fetch(PHOTOS)
            .then((resp) => resp.json())
            .then((photos: IPhoto[]) => this.setState({ 
                photos: photos.slice(0, 9),
                isLoading: false,
            }))
            .catch((error) => this.setState((prevState: IState) => ({
                isLoading: false,
                errors: prevState.errors.concat([error]),
            })));
    }

    public renderSpinner() {
        return (
            <Col xs={12} sm={{ size: 6, offset: 3 }}>
                <Alert color="info" className="text-center">
                    Loading...
                </Alert>
            </Col>
        )
    }

    public renderPhotos() {
        const { photos } = this.state;
        const { history } = this.props;
        if (photos.length) {
            return photos.map(({ id, title, thumbnailUrl, ...photo}: IPhoto) => (
                <Col xs={12} md={4} key={id}>
                    <PhotoCard
                        {...{ title, thumbnailUrl }}
                        onView={() => history.push(ROUTES.IMAGE.replace(':id', id.toString()))}
                        onEdit={this.handleEdit({ id, title, thumbnailUrl, ...photo })}
                    />
                </Col>
            ));
        }
        return (
            <Col xs={12} sm={{ size: 6, offset: 3 }}>
                <Alert color="info" className="text-center">
                    <h4 className="alert-heading">Oops!</h4>
                    There is no photos.
                </Alert>
            </Col>
        )
    }

    public renderSelectedPhoto() {
        const { selectedPhoto } = this.state;
        if (selectedPhoto) {
            return <Photo {...selectedPhoto}/>
        }
        return null;
    }

    public render() {
        const { isLoading, selectedPhoto } = this.state;
        return (
            <div className="album py-5 bg-light">
                <Container>
                    <Row>
                        {isLoading ? this.renderSpinner() : this.renderPhotos()}
                    </Row>
                </Container>
                <PhotoEditor
                    isOpen={!!selectedPhoto}
                    onSave={this.handleSave}
                    onToggle={this.handleCancel}
                    onCancel={this.handleCancel}
                >
                    {this.renderSelectedPhoto()}
                </PhotoEditor>
            </div>
        );
    }
}

export default withRouter(Album);
