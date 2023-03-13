import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
             <div className = 'right-sidebar-div-2'>
                 <img src={pen} alt='pen'  width='18'/>
                 <p>Three layers to secure a software development organization</p>
             </div>
             <div className = 'right-sidebar-div-2'>
                 <img src={pen} alt='pen'  width='18'/>
                 <p>Does your professor pass the Turing test? (Ep. 537)</p>
             </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
             <div className = 'right-sidebar-div-2'>
                 <img src={comment} alt='comment'  width='18'/>
                 <p>Accessibility Update: Colors</p>
             </div>
             <div className = 'right-sidebar-div-2'>
                 <img src={blacklogo} alt='blacklogo' width='18'/>
                 <p>Collectives: The next iteration</p>
             </div>
             <div className = 'right-sidebar-div-2'>
                 <img src={blacklogo} alt='blacklogo'  width='18'/>
                 <p>We’ve made changes to our Privacy Notice for Collectives™</p>
             </div>
             <div className = 'right-sidebar-div-2'>
                 <img src={blacklogo} alt='blacklogo'  width='18'/>
                 <p>Temporary policy: ChatGPT is banned</p>
             </div>
        </div>
      
    </div>
  )
}

export default Widget
