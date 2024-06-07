import React from 'react'
import AdminTopNavBar from '../components/AdminTopNavBar'
import AdminLeftNavBar from '../components/AdminLeftNavBar'

const AdminLayout = ({children}) => {
  return (
    <div className='bg-neutral-100 h-[100vh] flex flex-col'>
        <AdminTopNavBar/>
      <div className='flex gap-10'>
        <div>
            <AdminLeftNavBar/>
        </div>
        <div>
        {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
