import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isPending: state.requestRobot.isPending,
        robot: state.requestRobot.robot,
        error: state.requestRobot.error
    }
}

class RoboImg extends Component {
    render() {
        return (
            <div className='roboimg'>
                {this.getRoboImgContent()}
            </div>
        )
    }

    getRoboImgContent() {
        const { isPending, robot, error } = this.props;
        if (isPending) {
            return <p>LOADING...</p>
        } else if (error != null) {
            return <p>Error while retrieving the robot face: {error}</p>
        } else if (robot != null) {
            let imageUrl = window.URL.createObjectURL(robot);
            return <img src={imageUrl} alt=''></img>
        } else { //default for initial page load, could be done by using an initial state for a 'setRobo' action
            return <img src='https://robohash.org/initial' alt=''></img>
        }
    }

}

export default connect(mapStateToProps)(RoboImg);