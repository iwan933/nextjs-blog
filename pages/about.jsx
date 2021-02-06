import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Hello there, feel free to drop a message.</p>
            <Link href="/">Home</Link> <br />
            <Link href="/about">About</Link>
        </div>
    );
}