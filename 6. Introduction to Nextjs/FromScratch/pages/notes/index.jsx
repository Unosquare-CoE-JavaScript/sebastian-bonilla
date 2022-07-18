import React from 'react';
import Link from 'next/link';

export default () => (
        <>
            <h1>Notes Page</h1>
            <Link href="/notes/[id]" as={`/notes/1`}>
                Note 1
            </Link>
        </>
    )