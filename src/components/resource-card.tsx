import React from 'react'
import { css } from '../../styled-system/css'
import { Center } from '../../styled-system/jsx'

function ResourceCard() {
    return (
        <div className={css({ h: 200, w: 200, background: 'red.300', p:8, borderRadius: 'md' })}>
            <Center>
                <h1>ResourceCard</h1>
            </Center>
        </div>
    )
}

export default ResourceCard