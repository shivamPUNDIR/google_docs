import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import image from '../assets/images/1.jpg'
import { signOut, useSession } from 'next-auth/client';
const Header = () => {
    const [session] =useSession()
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            <Button
                color='gray'
                buttonType='outline'
                rouded={true}
                iconOnly={true}
                ripple='dark'
                className='md-inline-flex h-20 w-20 border-0'
            >
                <Icon name="menu" size='3xl' />
            </Button>
            <Icon name='description' size='5xl' color="blue"></Icon>
            <h1 className='ml-2 text-gray-700 text-2xl'>Docs</h1>

            <div className='mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
                <Icon color='gray' name='search' size='3xl' />
                <input type="text" placeholder='Search' className='flex-grow px-5 text-base bg-transparent outline-none' />
            </div>
            <Button
                color='gray'
                buttonType='outline'
                rouded={true}
                iconOnly={true}
                ripple='dark'
                className='md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0'
            >
                <Icon name="apps" size='3xl' />
            </Button>

            <img 
            // alt="user_avatar" 
            onClick={signOut}
            loading='lazy' 
            // onClick={signOut} 
            src={session?.user.image}
             className='sm:hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2' />
        </div>
    )
}

export default Header
