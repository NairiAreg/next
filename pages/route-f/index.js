import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function route1() {
    const [account, setAccount] = useState(-1);

    let router = useRouter();
    return (
        <div>
            <h2>Route1</h2>
            <label>Account Number</label>
            <input onChange={e=>setAccount(e.target.value)} type="number"/>
            <Link as={`/post/${account}`} href={`/post/${account}`}><a>Go To...</a></Link>

            <button onClick={()=>router.push('/second')}>useRouter</button>


            <style jsx global>
                {`
                    h2 {
                        color: indigo;
                    }

                    a {
                        color: indianred;
                    }
                `}
            </style>
        </div>
    )
}
