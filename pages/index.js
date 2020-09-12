import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import axios from 'axios';

export default function Home(props) {
  useEffect(() => {
    // console.log($);
  }, [])
  console.log(props);
  return (
    <Layout>
      <div className='bg-light'>
        <Head>
          <title>New Title</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        </Head>
        Main Page

        <button onClick={() => {
          const res = axios.get('/api/hello')
            .then(e => console.log(e))
        }} className="btn btn-dark">Get post</button>

        <button onClick={() => {
          const res = axios.post('/api/hello', { age: 20 })
            .then(e => console.log(e))
        }} className="btn btn-light">Post post</button>

        <button onClick={() => {
          const res = axios.put('/api/hello',{put:true})
            .then(e => console.log(e))
        }} className="btn btn-warning">Post post</button>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://first-navy.vercel.app/api/hello`)
  const data = await res.json()

  return { props: { data } }
}