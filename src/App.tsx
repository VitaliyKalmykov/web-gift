import './index.css';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer.tsx';
import { CartProvider } from './cartContext/CartContext';  // Імпортуємо CartProvider

function App() {
    return (
        <CartProvider>
            <Header />
            <Main />
            <Footer />
        </CartProvider>
    );
}

export default App;