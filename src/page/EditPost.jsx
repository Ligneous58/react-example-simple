import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import { Button, Form } from "react-bootstrap";

export default function EditPostPage() {
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        api.getPost(id)
        .then(
            response => {
                console.log("Получены данные:", response.data[0]); // Один лог
                const data =response.data[0];
                setTitle(data.title || '');
                setDescription(data.description || '');
            }
        )
        .catch(error => console.log(`Error ${error}`));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        api.updatePost(id, {
            id,
            title,
            description
        }).then(() =>  {
            navigate("/posts");
        }).catch(error => console.log(error));
    }

    return <div className="container mt-3">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
             <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={3}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}