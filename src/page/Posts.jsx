import { useEffect, useState } from "react";
import api, { getPosts } from "../api/api";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function Posts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
         loadData();
    }, []);

    function loadData() {
        api.getPosts()  
            .then(response => { setProducts(response.data); })  
            .catch(error => { console.error('Ошибка при получении данных:', error); });
    }

    function deleteProduct(id) {
        api.deletePost(id).then(loadData()) ;
    }

     function editProduct(id) {
        navigate(`/edit-post/${id}`);
    }

    return <div className="container mt-3">
         <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{products.map(element => 
        <tr>
            <th>{element.id}</th>
            <th>{element.title}</th>
            <th>
                <Button className="btn-success" onClick={() =>editProduct(element.id)}>Редактировать</Button>
                <Button className="btn-danger" onClick={() =>deleteProduct(element.id)}>Удалить</Button>
            </th>

        </tr>
      )}
      </tbody>
    </table>
    </div>
}

export default Posts;