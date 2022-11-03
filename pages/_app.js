// import '../styles/globals.css'
import '../styles/index.css'
import '../styles/header.css';
import '../styles/body.css';
import '../styles/footer.css';
import '../styles/nav.css';
import '../styles/events.css';
import '../styles/navigation.css';
import "../styles/nprogress.css"
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';


function MyApp({ Component, pageProps }) {


	Router.events.on('routeChangeStart', (url)=>{
		NProgress.start();
	})

	Router.events.on('routeChangeComplete', (url)=>{
		NProgress.done();
	})
	return <Component {...pageProps} />
}

export default MyApp
