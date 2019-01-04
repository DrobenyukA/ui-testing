import React from 'react';
import Container from 'reactstrap/lib/Container';
import Button from 'reactstrap/lib/Button';

interface IProps {}

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default function Footer(props: IProps){
    return (
        <footer className="text-muted py-4">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>
                        New to Bootstrap?&nbsp;
                        <a href="https://getbootstrap.com">Visit the homepage</a>.
                    </p>
                </div>
                <p className="float-right">
                    <Button color="link" onClick={scrollToTop}>Back to top</Button>
                </p>
            </Container>
        </footer>
    )
}