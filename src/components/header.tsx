import Link from "next/link";
import { css } from "../../styled-system/css";
import { HStack } from "../../styled-system/jsx";
import { CircleUserRound } from 'lucide-react';
import { JSX } from "react";

interface HeaderProps {
    showUser: boolean;
    children?: JSX.Element;
  }
function Header({showUser, children}: HeaderProps) {
    return <div className={css({ borderBottom: '1px solid black', padding: 4, shadow: 'md', height: '80px' })}>
        <HStack justifyContent={'space-between'}>
            <Link className={css({ m: 4, fontSize: '2xl'})} href="/Home">LearnStack</Link>
            {showUser && <Link href=''><CircleUserRound className={css({ color: 'gray', })} size={48} /></Link>}
            {children}
        </HStack>
    </div>
}

export default Header;