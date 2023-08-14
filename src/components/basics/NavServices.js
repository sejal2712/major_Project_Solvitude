import React from 'react'

const NavServices = ({filterService,serviceList}) => {
  return (
    <>
      <nav className='NavService'>
        <div className='btn-service'>
            {
                serviceList.map((curEle)=>{
                    return(
                        <button className='btn-service-category' onClick={()=>filterService(curEle)}>{curEle}</button>


                    );
                })
            }
            
          

        </div>
      </nav>
    </>
  )
}

export default NavServices
