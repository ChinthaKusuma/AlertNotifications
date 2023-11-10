// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div className="">
      <h1 className="para1">{children}</h1>
      <GrFormClose className="gr" />
    </div>
  )
}

export default Notification
