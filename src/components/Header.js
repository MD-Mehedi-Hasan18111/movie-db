import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<Link href="/">
				<Image src="/logo.svg" width="139" height="26" alt="image" />
			</Link>

			<ul className="flex items-center space-x-5">
				<li>
					<Image src="/ring.svg" width="24" height="24" alt="icon" />
				</li>
				<li>
					<Image src="/icons/sun.svg" width="24" height="24" alt="icon" />
				</li>
				<li>
					<Image src="/shopping-cart.svg" width="24" height="24" alt="icon" />
				</li>
			</ul>
		</nav>
	</header>
    );
};

export default Header;