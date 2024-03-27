'use client'
const { default: Link } = require("next/link")
import { useState } from 'react'
import styles from './link.module.css'
import NavBarLink from './navBarLinks/navBarLink'
import Image from 'next/image'

const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
]
const Links = () => {

    const [open, setOpen] = useState(false)

    const session = true;
    const isAdmin = true;

    return (
        <div className="abcds">
            <div className={styles.links}>
                {links.map((item) => {
                    return (
                        <NavBarLink item={item} key={item.title} />
                    )
                })}
                {session ?
                    (
                        <>
                            {isAdmin && <NavBarLink item={{ path: '/admin', title: 'Admin' }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) :
                    (
                        <NavBarLink item={{ path: '/login', title: 'Login' }} />
                    )
                }
            </div>
            <Image src='/menu.png' alt='' width={30} height={30} onClick={()=>setOpen(pre=>!pre)} className={styles.menubtn} />
            {
                open && <div className={styles.moblink}>
                    {links.map((item) => {
                    return (
                        <NavBarLink item={item} key={item.title} />
                    )
                })}
                </div>
            }
        </div>
    )
}

export default Links