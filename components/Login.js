import {signIn} from 'next-auth/client'
import Image from 'next/image'
import Button from '@material-tailwind/react/Button'
const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Image height="300" width="550" src="https://links.papareact.com/1ui"/>

            <Button className='w-44 mt-10' 
                    color='blue'
                    buttonType='filled'
                    ripple='light'
                    onClick={signIn}
            >LOGIN</Button>

        </div>
    )
}

export default Login
