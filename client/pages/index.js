import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Main from '../components/Main';


const style = {
  wrapper: `h-screen max-h-sreen h-min-screen bg-[#20242f] text-white select-non flex flex-col justify-between`,
}

export default  function Home ()  {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <h2>Transaction</h2>
    </div>
  )
}


