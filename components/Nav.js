import Link from 'next/link'

import { Instagram } from 'components/misc/Icons'
import { Pinterest } from 'components/misc/Icons'

const Nav = () => {
    return (
        <nav className="bg-primary">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center h-10 space-x-2">
                        <a className="text-white hover:text-black transition-150" href="www.instagram.com">
                            <Instagram/>
                        </a>
                        <a className="text-white hover:text-black transition-150" href="www.pinterest.com">
                            <Pinterest/>
                        </a>
                    </div>
                    <div>
                        <ul className="flex flex-row items-center space-x-6">
                            <li>
                                <Link href="/">
                                    <a className="text-sm font-light text-white uppercase duration-150 hover:text-black">about</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-sm font-light text-white uppercase duration-150 hover:text-black">look book</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-sm font-light text-white uppercase duration-150 hover:text-black">materials</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-sm font-light text-white uppercase duration-150 hover:text-black">productions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-sm font-light text-white uppercase duration-150 hover:text-black">contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
