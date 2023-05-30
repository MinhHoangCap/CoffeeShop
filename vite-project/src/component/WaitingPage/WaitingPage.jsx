// import React, { Component } from 'react'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import {faArrowRotateForward} from '@fortawesome/free-regular-svg-icons'
// export default class WaitingPage extends Component {
//   render() {
//     return (
//       <div className='waitingpage'>
//         <FontAwesomeIcon icon={faArrowRotateForward} />
//       </div>
//     )
//   }
// }
import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowRotateForward} from '@fortawesome/free-regular-svg-icons'
export default function WaitingPage() {
  return (
    // <div>WaitingPage</div>
        <div className='waitingpage'>
            <FontAwesomeIcon icon={faArrowRotateForward} />
        </div>
  )
}
