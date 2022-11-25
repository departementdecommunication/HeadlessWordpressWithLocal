import React, { Component}  from 'react';
import Image from 'next/image'

import logo from '../../public/images/Logo-DC-Gris.svg'


function Header() {
	return(
		<div className="h-20 py-8 px-8">
		<Image src={logo} className="object-contain h-50 w-100" alt='departementDeCommunication'/>
	</div>)

}
export default Header