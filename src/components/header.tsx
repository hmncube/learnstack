import Link from "next/link";
import { css } from "../../styled-system/css";
import { HStack } from "../../styled-system/jsx";
import { Camera, CircleUserRound } from 'lucide-react';

function Header() {
    return <div className={css({ borderBottom: '1px solid black', padding: 4, shadow: 'md', })}>
        <HStack justifyContent={'space-between'}>
            <Link className={css({ m: 4, fontSize: '2xl'})} href="/Home">LearnStack</Link>
            <Link href=''><CircleUserRound className={css({ color: 'gray', })} size={48} /></Link>
        </HStack>
    </div>
}

export default Header;