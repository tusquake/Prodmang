import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productService from '../service/productService';

const Home = () => {

    const [productList, setProductList] = useState([]);

    const [msg, setMsg] = useState("");

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        productService.getAllProduct().then((res) => {
            setProductList(res.data);
            console.log(res.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteProduct = (id) => {
        productService.deleteProduct(id)
            .then((res) => {
                setProductList(productList.filter(product => product.id !== id));
                setMsg("Product Deleted Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                All Product List
                            </div>
                            {
                                msg &&
                                <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((p, num) => (


                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                        <Link to={'editProduct/' + p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
