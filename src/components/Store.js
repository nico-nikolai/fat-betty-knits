import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


function RenderStoreItem({item}) {
    return (
        <Card>
            <Link to={`/store/${item.id}`}>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
            </Link>
      </Card>
    )
}
class Store extends Component {

    render() {
        const catalog = this.props.catalog.items.map(item => {
            return (
                <div key={item.id} className="col-sm-6">
                    <RenderStoreItem item={item} />
                </div>
            )
        });

        if (this.props.catalog.isLoading) {
            return (
                <div className="container">
                    <div className ="row">
                        <Loading />
                    </div>
                </div>
            )
        }

        if (this.props.catalog.errMess) {
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{this.props.items.errMess}</h4>
                    </div>
                </div>
            </div>
        }
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