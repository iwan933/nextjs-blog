import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My First Post Title!!</title>
            </Head>
            <h1>My First post</h1>
            <a href="https://nextjs.org">Next.js!</a> <br/>
            <Link href="/">
                <a>Home</a>
            </Link> <br/>
        </Layout>
    );
}
