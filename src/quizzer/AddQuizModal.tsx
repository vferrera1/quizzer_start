import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export const AddQuizModal = ({
    quizzes,
    show,
    handleClose,
    addQuiz
}: {
    quizzes: Quiz[];
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuiz: Quiz) => void;
}) => {
    const [title, setTitle] = useState<string>("Example Quiz");
    const [body, setBody] = useState<string>("Example Description");

    const saveChanges = () => {
        addQuiz({
            id: quizzes.length + 1,
            title: title,
            body: body,
            published: false,
            questionList: []
        });
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTitle("Example Quiz");
                            setBody("Example Description");
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
