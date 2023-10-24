import React from 'react';
import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
    children: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?:  string;
}

export const ShopLayout = ({ children, title, pageDescription, imageFullUrl }: Props) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name='description' content={ pageDescription }/>
            <meta name='og:title' content={ title }/>
            <meta name='og:description' content={ pageDescription }/>
            {
                imageFullUrl && (
                    <meta name='og:image' content={ imageFullUrl }/>
                )
            }
        </Head>

        <nav>
            <NavBar/>
        </nav>

        {/* SIDEBAR */}

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            {children}
        </main>

        <footer>
            {/* TODO CUSTOM FOOTER */}
        </footer>
    </>
  )
}
