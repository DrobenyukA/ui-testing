import React, { CSSProperties } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container, Row, Col } from 'reactstrap';

import PageTitle from '../components/PageTitle/View';

interface IProps {};

export default function MapPage() {
    const settings = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        description: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        tilesURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
    const position: [number, number] = [settings.lat, settings.lng];
    const styles = {
        width: '100%',
        height: '550px'
    } as CSSProperties; 
    return (
        <>
            <PageTitle
                title="Leaflet map"
                description="an open-source JavaScript library for mobile-friendly interactive maps"
            />
            <Container>
                <Row>
                    <Col>
                    <Map center={position} zoom={settings.zoom} style={styles} className="mt-5">
                        <TileLayer
                            attribution={settings.description}
                            url={settings.tilesURL}
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </Map>
                    </Col>
                </Row>
            </Container>   
        </>
    );
}