import React, {Component, Proptypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Col, Row, Checkbox } from 'react-bootstrap';
import {SelectPlan} from '../actions/index.js'; 


class Plan extends Component {



  DifferentsPlans(){

    return this.props.Prices.map((plan) => { 
    	return <Row  key={plan.id} >
    	        <Col xs={1} sm={1} md={1} lg={1}>
    	            <Checkbox 
                    onClick={() => this.props.SelectPlan(plan, this.props.Prices)}
    	              style={{textAlign:'right',marginTop:40}}>
                   </Checkbox>
    	        </Col>
    	        <Col xs={10} sm={10} md={10} lg={10}>
    	          <h2>{plan.name}</h2>
    	          <p>{plan.discription}</p>
    	        </Col>
    	        <Col xs={1} sm={1} md={1} lg={1}>
    	          <p style={{marginTop:10}}>{plan.price}</p>
    	          <p>£</p>
    	        </Col>	    	  
	    	</Row>
    });
  }


render(){
	return (
          <div>
            {this.DifferentsPlans()}
          </div>
		);
	}
}


function mapStateToProps(state){
  return {
  	Prices:state.Prices,
  }
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({SelectPlan:SelectPlan}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Plan);