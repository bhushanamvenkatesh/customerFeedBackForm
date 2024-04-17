import React from "react";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
    return <div>
         <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <Link to='/'><img src="https://edupoly.in/common/assets/edupoly-logo-light.png" className="logo"  alt=""/>
            </Link><button className="btn btn-primary"><Link to='enquiries' className="enquiries-button">All Enquiries</Link></button>
                
        </div>
    </nav>
    <Outlet></Outlet>
    </div>

}

export default Navbar