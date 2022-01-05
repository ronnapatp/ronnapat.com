import {
    HandIcon
} from '@heroicons/react/outline'
export default function () {
    return(
        <>
            <div className="container mx-auto px-6 lg:px-40 py-10">
                <div className='mt-10'>
                    <HandIcon className='w-20 h-20' />
                    <span className='text-4xl md:text-7xl leading-[0.25]'>
                        About
                        <p className='text-3xl md:text-6xl'>
                            Ronnapat Srivoravilai
                        </p>
                    </span>
                    <hr className='w-20 mt-5' />
                </div>
            </div>
        </>
    )
}