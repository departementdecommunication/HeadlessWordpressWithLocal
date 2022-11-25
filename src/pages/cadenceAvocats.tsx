import React, { Component}  from 'react';
import Link from "next/link"
import Layout from '../components/layout'


function cadenceAvocatDesc(){
	return(
		<Layout>
		<div>
			<p className=""> bla bla bla</p>
			<Link href="/">
				<p className="font-bold underline hover:text-indigo-800">Back</p>
			</Link>
		</div>
		</Layout>
	)
}
export default cadenceAvocatDesc