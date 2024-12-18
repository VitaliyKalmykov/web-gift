import './index.css';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer.tsx';
import { CartProvider } from './cartContext/CartContext';
import ShopCart from "./components/ShopCartModal/ShopCart";
import {CallProvider} from "./callContext/CallContext";
import CallModal from "./components/CallModal/CallModal";
import {useState} from "react";

function App() {

    const [currentSection, setCurrentSection] = useState<string>("menu");

    return (
        <CartProvider>
            <CallProvider>
            <Header setCurrentSection={setCurrentSection} />
            <Main currentSection={currentSection} />
            <Footer />
            <ShopCart/>
                <CallModal/>
            </CallProvider>
        </CartProvider>
    );
}

export default App;