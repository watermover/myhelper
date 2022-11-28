import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export class MainComp extends React.Component {
  render() {
    return <Container fluid>
       <Row>
       <Form.Label >theme_of_decision</Form.Label>
  <Form.Control
    type="text"
    aria-describedby="theme_of_decision"
  />
  <Form.Text id="theme_of_decision" muted>Введите тему принимаемого решения
  </Form.Text>
       </Row>
      <Row>
        <Col>Плюсы</Col>
        <Col>Минусы</Col>
      </Row>
      <Row>
        <Col>
          <Card
            bg='success'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>плюс 1</Card.Header>
            <Card.Body>
              <Card.Title>Значимость</Card.Title>
              <Card.Text>]плюс 1
              </Card.Text>
            </Card.Body>
          </Card>
          <Button variant="outline-success">Добавить плюс</Button>
        </Col>
        <Col>
          <Card
            bg='info'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>минус 1</Card.Header>
            <Card.Body>
              <Card.Title>Значимость</Card.Title>
              <Card.Text>]минус 1
              </Card.Text>
            </Card.Body>
          </Card>
          <Button variant="outline-info">Добавить минус</Button>
        </Col>
      </Row>

    </Container>;
  }
}

export default MainComp;