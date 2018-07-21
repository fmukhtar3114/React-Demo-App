import React from 'react'; 
import './Header.css'
import { Link } from 'react-router-dom'

const header = () => (

      <header className="header-basic">

			<div className="header-limiter">

				<h1><a >Company<span>logo</span></a></h1>

				<nav>
                    
					<a > <Link to='/'>Log In</Link></a>
                    <a > <Link to='/home'>Home</Link></a>
					
				</nav>
			</div>

		</header>

  )
  export default header;