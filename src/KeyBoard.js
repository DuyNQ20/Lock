import React from 'react';
import { Button, Row, Col, Select } from 'antd';
 
class KeyBoard extends React.Component{
    render(){
        return (
            <>
            <Row justify="space-between">
                <Col span={8}>1</Col>
                <Col span={8}>1</Col>
                <Col span={8}>1</Col>
                
            </Row>
             <Row justify="space-between">
             <Col span={8}>1</Col>
             <Col span={8}>1</Col>
             <Col span={8}>1</Col>
             
         </Row>
         </>
        ) 
    }
}

export default KeyBoard