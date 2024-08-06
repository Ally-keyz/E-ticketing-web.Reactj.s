import React from 'react'
import AgentLayout from './AgentContent'
import { Outlet } from 'react-router-dom'

function AgentLayout0() {
  return (
    <>
   <AgentLayout >
   <div className=''>
        <Outlet />
      </div> 
   </AgentLayout>

    </>
  )
}

export default AgentLayout0