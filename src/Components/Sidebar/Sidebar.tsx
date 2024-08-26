import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const { pathname } = useLocation();

    return (
        // <div>
        <div className="w-1/5 bg-gray-100 flex flex-col  justify-center items-center gap-10">
            <Link to='/contacts' >
                <p
                    className={`font-medium lg:text-lg cursor-pointer uppercase tracking-widest ${pathname.includes('contacts') ? "text-cyan-500" : ""}`}
                >
                    Contacts
                </p>
            </Link>
            <Link to='/maps' >
                <p
                    className={`font-medium lg:text-lg cursor-pointer uppercase tracking-widest ${pathname.includes('maps') ? "text-cyan-500" : ""}`}
                >
                    Charts and maps
                </p>
            </Link>
        </div>
        // </div>
    )
}

export default Sidebar
