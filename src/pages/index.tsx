import Container from '@/components/container/Container'
import Filter from '@/modules/products/Filter'
import ProductList from '@/modules/products/ProductList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>All Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <Filter />
            <ProductList />
          </div>
        </Container>
      </main>
    </>
  )
}
