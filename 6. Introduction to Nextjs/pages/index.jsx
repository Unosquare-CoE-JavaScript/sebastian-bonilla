import React from 'react';
import Link from 'next/link';

export default () => (
        <>
            <h1>Index Page</h1>
            <Link href="/notes">
                Notes
            </Link>
        </>
    )