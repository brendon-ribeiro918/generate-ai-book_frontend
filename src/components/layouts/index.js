
import Header from './header'
import Footer from './footer'

export default function Layouts(props) {

   // Access the child component
   const child = props.children;

  return (
    <>
      <Header/>
      {child}
      <Footer/>
    </>
  )
}
