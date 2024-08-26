import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ContactList from '../Pages/ContactList/ContactList'
import EditContact from '../Components/EditContact/EditContact'
import Maps from '@/Pages/Maps/Maps'

function NavRoutes() {
    return (
        <Routes>
            <Route element={< Home />} >
                <Route path='/contacts' element={<ContactList />} />
                <Route path='/contact/edit' element={<EditContact isUpdatingContact={true} />} />
                <Route path='/contact/create' element={<EditContact isUpdatingContact={false} />} />
                <Route path='/maps' element={<Maps />} />
                <Route path='*' element={<Navigate to="/contacts" replace />} />
            </Route>
        </Routes>
    )
}

export default NavRoutes
