import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderItem({item}) {
    console.log(item)
    return (
        <div className="col-sm m-1">
            <Card>
                <CardImg top src={item.image} alt={item.name} />
                <CardBody>
                    <CardText>{item.description}</CardText>
                    <Button>Add To Cart</Button>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderDescription({description}) {
    console.log(description)
    return (
        <div className="col">
            {description.text}
            <br />
            <br />
            {description.measurements}
            <br />
            <br />
            {description.material}
            <br />
            <br />
            {description.shipping}
            <br />
            <br />
            {description.description}
        </div>
    )
}
function StoreItem({item, description}) {
    if (item) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/store">Store</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{item.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="d-flex justify-content-center">{item.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderItem item={item}/>
                    <RenderDescription description={description}/>
                </div>
            </div>
        )
    }
    return <div/>
}

export default StoreItem;