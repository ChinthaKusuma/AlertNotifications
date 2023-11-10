// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

import {MdInfo, MdWarning} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bgContainer1">
        <h1>Alert Notifications</h1>
        <div className="two">
          <Notification>
            <div className="one">
              <AiFillCheckCircle className="circle1" />
              Success
            </div>
          </Notification>

          <p className="para2">You can access all the files in the folder</p>
        </div>
        <div className="two">
          <Notification>
            <div className="one12">
              <RiErrorWarningFill className="circle2" /> Error
            </div>
            {/* <RiErrorWarningFill /> */}
          </Notification>

          <p className="para2">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
        <div className="two">
          <Notification>
            <div className="one13">
              <MdWarning className="circle2" />
              Warning
            </div>
          </Notification>

          <p className="para2">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
        <div className="two">
          <Notification>
            <div className="one14">
              <MdInfo className="circle2" />
              Info
            </div>
          </Notification>

          <p className="para2">Anyone on the internet can view these files</p>
        </div>
      </div>
    )
  }
}
export default AlertNotifications
