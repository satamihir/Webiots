import React from 'react';
import './Salad.scss';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,Row,Col } from 'reactstrap';

const Salad = () =>(
    <div className = "Salad">
        
        <div className = "content">
            <h2>SALAD UGLY FILM EVER</h2>
               
               <Row>
               <Col xs={10} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">FEUGIAT CONSEQUAT</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">FEUGIAT CONSEQUAT</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h4">FEUGIAT CONSEQUAT</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                 
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>`
               </Row>
        </div>
        
    </div>
);

export default Salad;