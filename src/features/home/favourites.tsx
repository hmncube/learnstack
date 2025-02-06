import { Stack } from "../../../styled-system/jsx"
import { css } from "../../../styled-system/css"
import ResourceCard from "src/components/resource-card";

function Favourites() {
    return (
        <Stack w='100%' position="relative">
            <h1 className={css({ position: 'absolute', top: '-18px', left: '10px', background: 'white', pl: 4, pr: 4, fontSize: '2xl'})}>
                Favourites
            </h1>
            <div className={css({ border: '1px solid rgb(207, 83, 67)', h: 250, w: '100%', borderRadius: 'md', p:8})}>
                <ResourceCard />
            </div>
        </Stack>
    );
}

export default Favourites