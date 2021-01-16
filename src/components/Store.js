import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Store extends Component {

    render() {
        const catalog = this.props.catalog.map(item => {
            return (
                <div key={item.id} className="col-sm-6">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Store</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="d-flex justify-content-center">Store</h2>
                        <hr />
                    </div>
                </div>
                <div className="row store">
                    {catalog}
                </div>
            </div>
        )
    }
}

export default Store;