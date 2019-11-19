import React, {useState, useRef} from 'react';
import '../../App.css';
import StoreItem from './StoreItem';
import CustomFooter from '../footer/Footer';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const CustomH1 = styled.h1`
    color: #B22234;;
    font-family: Gotham;
    font-size: 72px;
    margin: 0.5em;
    margin-left: 2em;
    float: left;

    @media only screen and (max-width: 900px) {
        margin: auto;
        float: none;
        margin-bottom: 1em;
        font-size: 36px;
    }
`

const OrderDetails = styled.div`
    width: 60%;
    margin: 20vh auto;
    height: auto;
    font-size: 24px;
    border: 3px solid #B22234;;
    color: #B22234;

    @media only screen and (max-width: 900px) {
        width: 90%;
        margin-top: 1em;
    }
`

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;

    @media only screen and (max-width: 350px) {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 1870px) {
        justify-content: space-between;
    }


`

function Shop() {

    const [selected, setSelected] = useState(false);
    const ref = useRef(null);

    function handleClick() {
        setSelected(true);
        {window.scrollTo(0, ref.current.offsetTop)}
    }

    const showOrderDetails = () => {

        if (selected) {
            return (
                <OrderDetails>
                    At this time we are only accepting orders over the phone.
                    <br />
                    Please call 585-721-2966 for more details.
                </OrderDetails>
            );
        } else {
            return null;
        }
    }

    return(
        <div className="App">
            <header>
                <CustomH1>SHOP</CustomH1>
            </header>
            <ItemsContainer>
                <StoreItem src="./images/shop/mens-triblend-t.png" alt="mens tri-blend t" name="MEN'S TRI-BLEND TEE" price="$29.99" order={0} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/womens-triblend-t.png" alt="womens t" name="WOMEN'S TRI-BLEND TEE" price="$29.99" order={1} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/long-sleeve-t.png" alt="long sleeve t" name="TRI-BLEND LONG SLEEVE TEE" price="$31.99" order={2} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/mug.png" alt="mug" name="PUNKY MUG" price="$14.99" order={3} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/MTGA_mug.png" alt="MTGA mug" name="MTGA MUG" price="$14.99" order={4} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/blue-cap.png" alt="blue cap" name="BLUE BASEBALL CAP" price="$19.99" order={5} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/white-cap.png" alt="blue cap" name="WHITE BASEBALL CAP" price="$19.99" order={6} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/golf-towel.png" alt="golf towel" name="GOLF TOWEL" price="$24.99" order={7} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/prov1.png" alt="prov1 logo ball" name="PROV1 LOGO BALL" price="$49.99* per dozen" order={8} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/koozie.png" alt="koozie" name="KOOZIE" price="$3.49 each* must buy in multiples of 10" order={9} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/tote.png" alt="tote bag" name="TOTE BAG" price="$34.99" order={10} onItemClick={() => handleClick()}/>
                <StoreItem src="./images/shop/coaster.png" alt="coaster" name="COASTER" price="$2.99 each* must buy in multiples of 25" order={11} onItemClick={() => handleClick()}/>
            </ItemsContainer>
            <div ref={ref}>
                {showOrderDetails()}
            </div>
            <footer>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <CustomFooter />
                </ScrollAnimation>
            </footer>
        </div>
    );
}

export default Shop;