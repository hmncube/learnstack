'use client';

import React from 'react';
import { css } from '../../../../styled-system/css';
import { HStack, VStack, Center } from '../../../../styled-system/jsx';
import LearnstackIcon from 'src/components/learnstack-icon';
import { motion } from 'framer-motion';
import GoogleIcon from 'src/components/google-icon';

function SignUpPage() {
    return (
        <motion.div className={css({ height: '100vh', width: '100vw', bg: 'blue.100' })}>
            <Center height="100%">
                <div className={css({ bg: 'blue.200', borderRadius: 'md', p: 8 })}>
                    <VStack>

                        <LearnstackIcon />
                        <h1 className={css({ mt: 4, fontSize: '2xl' })}>Sign up</h1>

                        <button
                            onClick={() => console.log('Sign up with Google')}
                            className={
                                css({ bg: 'white', color: 'black', p: 4, borderRadius: 'md', cursor: 'pointer' })}>
                            <HStack>
                                <GoogleIcon /> Sign up with Google
                            </HStack>
                        </button>

                    </VStack>
                </div>
            </Center>
        </motion.div>
    );
}

export default SignUpPage;
