import React from 'react'
import InviteUser from './InviteUser'
import DeleteChatBtn from './DeleteChatBtn'

type Props = {
    chatId: string
}

const AdminCtrl = ({chatId}: Props) => {
  return (
    <div className='flex justify-end space-x-2 m-5 mb-0'>
        <InviteUser chatId={chatId}/>
        <DeleteChatBtn chatId={chatId}/>
    </div>
  )
}

export default AdminCtrl