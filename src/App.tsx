import './index.css';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer.tsx';
import { CartProvider } from './cartContext/CartContext';
import ShopCart from "./components/ShopCartModal/ShopCart";
import {CallProvider} from "./callContext/CallContext";
import CallModal from "./components/CallModal/CallModal";

function App() {
    return (
        <CartProvider>
            <CallProvider>
            <Header />
            <Main />
            <Footer />
            <ShopCart/>
                <CallModal/>
            </CallProvider>
        </CartProvider>
    );
}

export default App;