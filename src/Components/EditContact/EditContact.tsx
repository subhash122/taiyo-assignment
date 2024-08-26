import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { UserData, UserField } from '@/Types/data.interface';
import { RootState } from '@/Store/rootReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact, Contact, updateContact } from '@/Store/contactsSlice';
import { nanoid } from 'nanoid';
import { useLocation, useNavigate } from 'react-router-dom';

interface EditContactProps {
    isUpdatingContact: boolean
}
const radioItems = [
    {
        label: "Active",
        value: "Active",
    },
    {
        label: "Inactive",
        value: "Inactive",
    },
];
function EditContact({ isUpdatingContact }: EditContactProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        status: 'Active',
    })
    const { state: contactDeatils }: { state: Contact } = useLocation();

    useEffect(() => {
        if (isUpdatingContact) {
            setUserData({
                firstName: contactDeatils.firstName,
                lastName: contactDeatils.lastName,
                status: contactDeatils.status,
            })
        }
    }, [contactDeatils])
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: UserField) => {
        setUserData({
            ...userData,
            [field]: event.target.value,
        })
    }
    const handleRadioChange = (value: string) => {
        setUserData({
            ...userData,
            status: value,
        })
    }
    const handleUpdate = () => {
        if (
            userData.firstName === "" ||
            userData.lastName == "" ||
            userData.status == ""
        ) {
            toast.error('Please enter valid field details');
            return;
        }
        dispatch(updateContact({ ...userData, id: contactDeatils.id }))
        navigate('/contacts')
    }
    const handleSubmit = () => {
        if (
            userData.firstName === "" ||
            userData.lastName == "" ||
            userData.status == ""
        ) {
            toast.error('Please enter valid field details');
            return;
        }
        dispatch(addContact({ ...userData, id: nanoid() }))
        navigate('/contacts')
    }
    return (
        <div >
            <p className="text-center text-lg font-medium text-primary p-4 uppercase tracking-widest">
                {isUpdatingContact ? "Edit Contact" : "Create Contact"}
            </p>

            <div className="border border-primary lg:w-[450px] lg:m-auto m-5 p-4 rounded flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <p className="text-primary font-medium">First Name</p>
                    <input
                        type="text"
                        placeholder='first name'
                        onChange={(e) => handleInputChange(e, 'firstName')}
                        value={userData.firstName}
                        className="outline-cyan p-3 w-[280px] text-base border border-secondary rounded placeholder:text-[#808080]"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-primary font-medium">Last Name</p>
                    <input
                        type="text"
                        placeholder='last name'
                        onChange={(e) => handleInputChange(e, 'lastName')}
                        value={userData.lastName}
                        className="outline-cyan p-3 w-[280px] text-base border border-secondary rounded placeholder:text-[#808080]"
                    />
                </div>
                <div className="flex items-center lg:gap-[85px] lg:justify-start md:justify-between gap-12">
                    <p className="text-primary font-medium">Status</p>

                    <div className="w-[100px]">
                        <RadioGroup defaultValue={isUpdatingContact ? contactDeatils.status : userData?.status} onValueChange={handleRadioChange}>
                            {
                                radioItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <RadioGroupItem value={item.value} id={item.value} />
                                        <Label htmlFor={item.value}>{item.label}</Label>
                                    </div>)
                                )
                            }
                        </RadioGroup>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button
                        className='w-[250px] bg-cyan-300 p-3 text-base font-medium text-white tracking-widest hover:shadow-md border rounded'
                        onClick={isUpdatingContact ? handleUpdate : handleSubmit}
                    >{isUpdatingContact ? 'Update' : 'Submit'}</button></div>
            </div>
        </div>

        // </div >
    )
}

export default EditContact
