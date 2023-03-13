import React from 'react'

const WidgetTags = () => {
 
 const tags = ['c','javascript','css','express','java','python','html','php','node','angular','react','mern','android','jquery','c++','ios','ruby','sql','mongoose','chatgpt']
    return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
         <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>

                ))
            }
         </div>

      
    </div>
  )
}

export default WidgetTags
