'use client';

import React from 'react';
import button from '../../components/button';
import PageIcon from '../../components/page-icon';
import { css } from "../../../styled-system/css";
import { HStack, VStack } from "../../../styled-system/jsx";
import Header from 'src/components/header';
import Link from 'next/link';
import AnimatedDiv from 'src/components/animated-div';

export default function Landing() {
    const handleGetStartedClicked = () => {
        console.log('Get started clicked');
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    const links = <HStack>
        <Link href="#Hero" onClick={(e) => scrollToSection(e, 'Hero')} className={css({ m: 4, fontSize: '2xl' })}>Hero</Link>
        <Link href="#Features" onClick={(e) => scrollToSection(e, 'Features')} className={css({ m: 4, fontSize: '2xl' })}>Features</Link>
        <Link href="#Demo" onClick={(e) => scrollToSection(e, 'Demo')} className={css({ m: 4, fontSize: '2xl' })}>Demo</Link>
        <Link href="#AboutUs" onClick={(e) => scrollToSection(e, 'AboutUs')} className={css({ m: 4, fontSize: '2xl' })}>About us</Link>
    </HStack>;

    return (
        <>
            <Header showUser={false} children={links} />
            <AnimatedDiv id='Hero' backgroundColor='#FDF5E6'>
                <VStack paddingTop={8}>
                    <PageIcon />
                    <h1 className={css({ fontSize: '4xl', fontWeight: 'bold', mt: 4 })}>LearnStack</h1>
                    <h2 className={css({ fontSize: '2xl', fontWeight: 'bold', mt: 4, mb: 4 })}>Organize, Label, and Learn at Your Pace!</h2>
                    <button onClick={handleGetStartedClicked} className={button({ visual: 'solidBordered', size: 'sm' })} style={{ cursor: 'pointer' }}>Get started</button>
                </VStack>
            </AnimatedDiv>
            <AnimatedDiv backgroundColor='#E3F2FD' id='Features'>
                <VStack paddingTop={8}>
                    <h1 className={css({ fontSize: '4xl', fontWeight: 'bold', mt: 4 })}>Features</h1>
                </VStack>
            </AnimatedDiv>

            <AnimatedDiv id='Demo' backgroundColor='#FAFAFA'>
                <VStack paddingTop={8}>
                    <h1 className={css({ fontSize: '4xl', fontWeight: 'bold', mt: 4 })}>Demo</h1>
                </VStack>
            </AnimatedDiv>
            <AnimatedDiv id='AboutUs' backgroundColor='#F0FFF0'>
                <VStack paddingTop={8}>
                    <h1 className={css({ fontSize: '4xl', fontWeight: 'bold', mt: 4 })}>About us</h1>
                </VStack>
            </AnimatedDiv>
            <button
                onClick={scrollToTop}
                className={css({
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    border: '1px solid #E2E8F0'
                })}
            >
                ↑
            </button>
        </>
    );
}
