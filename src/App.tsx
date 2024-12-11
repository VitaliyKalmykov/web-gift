import './index.css';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer.tsx';
import { CartProvider } from './cartContext/CartContext';
import ShopCart from "./components/ShopCartModal/ShopCart";

function App() {
    return (
        <CartProvider>
            <Header />
            <Main />
            <Footer />
            <ShopCart/>
            {/*<ShopOrder/>*/}
        </CartProvider>
    );
}

export default App;