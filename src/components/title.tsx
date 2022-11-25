import { useState, useEffect } from 'react'


function Title (){
	
	useEffect(() => {
		document.title = `departement de comunication`
	}, [])
		
}
export default Title
