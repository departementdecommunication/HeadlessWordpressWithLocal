import React, { Component}  from 'react';
import Link from "next/link"


function frontaleDesc(){
	return(
		<div>
			<p className=""> bla bla bla</p>
			<Link href="/">
				<p className="font-bold underline hover:text-indigo-800">Back</p>
			</Link>
		</div>
		)
}
export default frontaleDesc