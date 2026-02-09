import Navbar from "./component/Navbar"
import Categories from "./component/Categories"
import Saleimage from "./component/Saleimage"
import Recommended from "./component/Recommended"
import Topic from "./component/Topic"
import PopularSection from "./component/PopularSection"
import Footer from "./component/Footer"

function App() {
    return (
        <>
            <Navbar />
            <Categories />
            <Saleimage />
            <Recommended />
            <Topic />
            <PopularSection />
            <Footer />
        </>
    )
}

export default App