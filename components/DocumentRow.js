import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import {useRouter} from 'next/dist/client/router'
const DocumentRow = ({id,filename,date}) => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push(`/doc/${id}`)} className='cursor-pointer text-sm text-gray-700 p-4 flex items-center rounded-lg hover:bg-gray-100'>
            <Icon name='article' size='3xl' color='blue'  />
            <p className='flex-grow pl-5 w-10 pr-10 truncate'>{filename}</p>
            <p className='pr-5 text-sm'>{date?.toDate().toLocaleDateString()}</p>
            <Button
            color='gray'
            buttonType='outline'
            rounded={true}
            iconOnly={true}
            ripple='dark'
            className='border-0'
            >
                <Icon name='more_vert' size='3xl' />
            </Button>
        </div>
    )
}

export default DocumentRow
