import React,{Component, Proptypes} from 'react'; 
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Plan from '../container/plan.jsx';

 class Tarifs extends Component{

	render(){
  console.log('active plan',this.props.ActivePlan);
		return (
              <div>
                <h2> Configure Your offre</h2>
                 <Plan />
                <hr />
                <h2>Total:{this.props.ActivePlan == 0 ? 0 : this.props.ActivePlan.price}</h2>
              </div>
			);
	}
}


function mapStateToProps(state){
  return {
    ActivePlan: state.activeplan,
  };
}

export default connect(mapStateToProps)(Tarifs);