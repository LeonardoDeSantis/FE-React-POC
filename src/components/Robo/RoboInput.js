import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobot } from '../../actions'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        requestRobot: (roboInput) => dispatch(requestRobot(roboInput))
    }
}

class RoboInput extends Component {
    render() {
        const { requestRobot } = this.props;
        return (
            <div>
                <input id='roboinput' type='text' onKeyPress={(event) => onKeyPress(event, requestRobot)}></input>
            </div>
        )
    }
}

const onKeyPress = (event, requestRobot) => {
    if (event.key === 'Enter') {
        let text = document.getElementById('roboinput');
        requestRobot(text.value);
        text.value = '';
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoboInput);