import Image from 'next/image'
import Hero from './components/Hero/Hero'

export default function Home({
  searchParams
}:{
  searchParams: { width: string, height: string }
}) {
  return (
    <main>
      <p>
      </p>
      <Image src='https://hzoyavtwhgwinhojrfla.supabase.co/storage/v1/object/public/portfolio/cam_txn691_4_20230425174112_38ef476537dd4fbdabd8a8d92c3cd2dc_master.jpeg' width={Number(100)} height={100} alt={''} />
    </main>
  )
}
