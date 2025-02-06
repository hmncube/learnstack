import Link from "next/link";
import { css } from "../../styled-system/css";
import { HStack } from "../../styled-system/jsx";
import { CircleUserRound } from 'lucide-react';
import { JSX } from "react";
import Image from "next/image";

interface HeaderProps {
    showUser: boolean;
    children?: JSX.Element;
    profilePicture?: string;
}
function Header({ showUser, children, profilePicture }: HeaderProps) {
    return <div className={css({ borderBottom: '1px solid black', padding: 4, shadow: 'md', height: '80px' })}>
        <HStack justifyContent={'space-between'}>
            <Link className={css({ m: 4, fontSize: '2xl' })} href="/Home">LearnStack</Link>
            {profilePicture ? (
                <Link href=''>
                    <div className={css({ borderRadius: '50%', overflow: 'hidden', width: 49, height: 49, mr: 4 })}>
                        <Image
                            src={profilePicture}
                            alt="Profile picture image"
                            width={48}
                            height={48}
                        />
                    </div>
                </Link>
            ) : (
                <Link href=''>
                    <CircleUserRound className={css({ color: 'gray' })} size={48} />
                </Link>
            )}
            {children}
        </HStack>
    </div>
}

export default Header;