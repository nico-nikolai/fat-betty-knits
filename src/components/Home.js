import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (
        <React.Fragment>
            <div className="container">
                <Card>
                    <h2 className="d-flex justify-content-center">Featured {item.type}</h2>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardBody>{item.description}</CardBody>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

function Home(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Link to="/store">
                        <RenderCard 
                            item={props.catalog}
                            isLoading={props.storeLoading}
                            errMess={props.storeErrMess}
                        />
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/store">
                        <RenderCard 
                            item={props.catalogTwo}
                            isLoading={props.storeLoading}
                            errMess={props.storeErrMess}
                        />
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/blogs">
                        <RenderCard item={props.blogs}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;