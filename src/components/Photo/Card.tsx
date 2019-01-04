import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, Button, ButtonGroup} from 'reactstrap';

import Placeholder from '../Placeholder/View';

interface IProps {
    title: string;
    thumbnailUrl?: string;
    onEdit: () => void;
    onView: () => void;
};

export default function Photo ({ title, thumbnailUrl, onView, onEdit }: IProps) {
    const styles = {
        text: {
            minHeight: "49px",
        }
    }
    return (
        <Card className="mb-4 shadow-sm">
            {thumbnailUrl ? <CardImg src={thumbnailUrl} top={true} alt={title}/> : <Placeholder /> }
            <CardBody>
                <CardText style={styles.text}>{title}</CardText>
                <div className="d-flex justify-content-between align-items-center">
                    <ButtonGroup>
                        <Button color="secondary" outline={true} onClick={onView}>View</Button>
                        <Button color="secondary" outline={true} onClick={onEdit}>Edit</Button>
                    </ButtonGroup>
                    <small className="text-muted">9 mins</small>
                </div>
            </CardBody>
        </Card>
    );
}
