import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
        src="/devangelectrotech/Devang-Electrotech-Hero_zbjifo.webp"
        alt="Vercel Logo"
        width={500}
        height={400}
      />
      <div style={{ height: 1500 }}></div>
      <Image
        src="/devangelectrotech/adani-logo_y65n3f.svg"
        alt="Vercel Logo"
        width={500}
        height={400}
      />
    </div>
  )
}
