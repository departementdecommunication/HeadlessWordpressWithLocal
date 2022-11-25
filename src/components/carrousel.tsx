import React, { Component}  from 'react';

import Image from 'next/image'

import case1 from '../../public/images/CadenceAvocat.png'
import case2 from '../../public/images/HyphenVMK.png'
import case3 from '../../public/images/Frontale.png'
import Link from "next/link"
import Script from 'next/script';


function Carrousel(){
	return(
		<div>
		 <p className="px-8 mt-5 font-bold"> Etude des cas: </p> 
		 	<div className="grid grid-cols-3 gap-4 place-items-center">
			 <div className="mt-5">
				 
				<Link href="/cadenceAvocats">
				
		 		<Image src={case1} alt='caseEtude1' className="grayscale hover:grayscale-0 transition-all"/></Link>
				 <p className="text-center mt-2">Cadence Avocat</p>
				 
				
			</div>
			<div className="mt-5">
				<Link href="/hyphenvmk">
		 		<Image src={case2} alt='caseEtude2'/></Link>
				 <p className="text-center mt-2">Hyphen VMK</p>
			</div>
			<div className="mt-5">
				<Link href="/frontale">
		 		<Image src={case3} alt='caseEtude3'/></Link>
				 <p className="text-center mt-2">Frontale</p>
			</div>
			</div>
		</div>)
}
export default Carrousel