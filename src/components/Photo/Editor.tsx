import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface IProps {
    isOpen: boolean;
    children: React.ReactChild|null;
    onToggle: () => void;
    onCancel: () => void;
    onSave: () => void;
}
export default function PhotoEditor({ isOpen, children, onToggle, onCancel, onSave}:IProps) {
    return (
        <>
            <Modal isOpen={isOpen} toggle={onToggle} size="lg">
                <ModalHeader toggle={onToggle}>Photo editor</ModalHeader>
                <ModalBody className="text-center">
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={onSave}>Save</Button>&nbsp;
                    <Button color="danger" onClick={onCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
};
