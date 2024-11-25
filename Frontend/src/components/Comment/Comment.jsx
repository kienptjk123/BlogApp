import Image from '../Image/Image'

function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex items-center gap-4'>
        <Image src='userImg' className='w-10 h-10 rounded-full object-cover' w='40' />
        <span className='font-medium'>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p>Lorem ipsum dolor it amet consectetur, adipisicing elit. Dicta eaodio, eaque ipsa dolor repudiandae enum.</p>
      </div>
    </div>
  )
}

export default Comment
