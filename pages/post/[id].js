import { useRouter } from 'next/router';

export default function Post(props) {
    let useR = useRouter();
    console.log(useR.query.id);

    console.log(props);
    return (
        <div>
            <h1>Accounts</h1>
            {
                props[0] !== undefined ?
                    <ul>
                        <li>{props[0].id}</li>
                        <li>{props[0].name}</li>
                        <li>{props[0].age}</li>
                    </ul>
                    :
                    <h2>Not Found</h2>
            }
        </div>
    )
}
Post.getInitialProps = e => {


    let arr = [
        {
            id: 0,
            name: 'Nairi',
            age: 19
        },
        {
            id: 1,
            name: 'Ashot',
            age: 40
        },
        {
            id: 2,
            name: 'Zara',
            age: 19
        }
    ]

    let a = arr.filter(i => i.id == e.query.id)
    console.log(e);
    return a;
}