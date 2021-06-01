import MenuContainer from '../components/home/MenuContainer'
import Layout from '../components/layout/Layout'


export async function getServerSideProps(){
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/categories')
  const categories = await response.json()

  return{
    props:{
      categories
    }
  }
}
export default function Home({categories}) {
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories}/>
    </Layout>
)

}
