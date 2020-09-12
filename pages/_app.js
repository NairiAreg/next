import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  console.log(Component);
  console.log(pageProps);
  return (
    <div>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
