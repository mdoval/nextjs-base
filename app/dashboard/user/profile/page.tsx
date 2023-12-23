import ProfileForm from '@/app/components/ProfileForm'
import { getUsuarioLogueado } from '@/utils/getUsuarioLogueado'
import React from 'react'

const UserProfile = async () => {
  const user = await getUsuarioLogueado()
  
  return (
    <div className='p-10 flex flex-col items-center space-y-4'>
        <h1>Perfil de Usuario</h1>      
        <div className='w-1/2'>
            <ProfileForm user={user} />  
        </div>
    </div>
  )
}

export default UserProfile
