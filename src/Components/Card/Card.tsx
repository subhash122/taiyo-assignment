import { Contact, removeContact } from '@/Store/contactsSlice'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

interface CardProps {
    details: Contact
}
function Card({ details }: CardProps) {
    const dispatch = useDispatch();
    return (
        <div className="w-[300px] border border-gray-100 p-5 rounded shadow-md">
            <p className="text-base text-primary">
                {details.firstName} {details.lastName}
            </p>
            <p className="text-base text-primary mt-1">
                Status : {details.status}
            </p>
            <div className="flex items-center justify-between gap-5 mt-5">
                <Link to="/contact/edit" state={details} className="w-full">
                    <button className='border border-yellow-500 text-yellow-500 p-2  rounded text-base font-medium tracking-widest hover:shadow-md '> Edit</button>
                </Link>
                <button onClick={() => dispatch(removeContact(details.id))}
                    className='border border-red-400 text-red-500 p-2 rounded text-base font-medium tracking-widest hover:shadow-md '> Delete</button>
            </div>
        </div>
    )
}

export default Card
