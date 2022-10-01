import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card/card.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>News API | Home Page </title>
        <meta name="keywords" content="Reeracoen" />
      </Head>
      <Card />
    </>
  );
}
