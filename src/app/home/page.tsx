import Header from "src/components/header"
import Favourites from "src/features/home/favourites";
import {css} from "../../../styled-system/css";

interface HomePageProps {
    profilePic: string;
}
function HomePage({ profilePic }: HomePageProps) {
    return (
        <>
            <Header showUser={true} profilePicture={profilePic} />
            <div className={css({m:8})}>
                <Favourites />
            </div>
            
        </>
    )
}

export default HomePage