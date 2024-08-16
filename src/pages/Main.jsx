import * as C from "components/common"
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Main() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === "/") navigate("/ko");
	}, []);

  return (
		<>
			{/* <C.Header /> */}
			<C.Layout>
    		<Outlet />
			</C.Layout>
			<C.Footer />
		</>
  )
}
