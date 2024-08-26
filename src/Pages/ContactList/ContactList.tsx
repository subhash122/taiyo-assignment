import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/rootReducer';

function ContactList() {
    const navigate = useNavigate();
    const contactState = useSelector((state: RootState) => state.contacts);

    return (
        <>
            <div className='flex justify-center mt-4'><button
                className='w-[300px] bg-cyan-300 p-4 text-base font-medium text-white tracking-widest hover:shadow-md border rounded'
                onClick={() => {
                    navigate("/contact/create");
                }}
            >Create Contact</button></div>


            <p className="text-center text-primary text-lg mt-5 tracking-widest">
                All Contacts
            </p>

            <div className="md:container flex flex-wrap  items-center gap-5 p-5 mx-auto mt-10">
                {
                    contactState.contacts.map((contact)=>(<Card key={contact.id} details={contact}/>))
                }
                
            </div>
        </>
    )
}

export default ContactList
