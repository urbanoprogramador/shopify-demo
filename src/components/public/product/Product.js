import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { asyncActionLoadProduct } from "../../../core/store/product/actions/action";
import { selectGalery, selectOptions, selectPrice, selectProductStatus, selectTitle, selectVendor, selectDescription } from './../../../core/store/product/selectors/selector';
import { Carousel } from "../../template/carousel/Carousel";
import { clearHtml } from "../../../core/helper/clearHtml";
import { Modal } from "../../portal/Modal";


const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


export const CartContext = createContext(null);

const Galeria = () => {

    const galery = useSelector(selectGalery);

    return (<>
        <Carousel isImg={true} items={galery} />
    </>);
}

const Seccion1 = () => {
    const vendor = useSelector(selectVendor);
    const title = useSelector(selectTitle);
    const price = useSelector(selectPrice);

    return (<div className="headerProduct">
        <h3>{vendor}</h3>
        <h1>{title}</h1>
        <h2>${formatter.format(price.price_min / 100)} <span>${formatter.format(price.compare_at_price / 100)}</span></h2>
    </div>);
}

const SeccionColor = () => {
    const color = useSelector(selectOptions('Color'));

    const { color: selecter, setColor, } = useContext(CartContext);


    return (<div className="contectOpction">
        <div className="rowLabel">
            Color:
        </div>
        <div className="rowValue">
            {
                color.values.map((e, index) => {
                    return (<span key={e} className={`selectColorBorder ${selecter === index ? 'active' : ''}`} onClick={() => { setColor(index) }}>
                        <span key={e} style={{ background: e }} className="selectColor"></span>
                    </span>);
                })
            }
        </div>
    </div>);
}

const SessionSize = () => {
    const size = useSelector(selectOptions('Size'));

    const { size: selecter, setSize, } = useContext(CartContext);
    return (<div className="contectOpction">
        <div className="rowLabel">
            Size:
        </div>
        <div className="rowValue">
            {
                size.values.map((e, index) => {
                    return (< span key={e} className={`SelectSize ${selecter === index ? 'active' : ''}`} onClick={() => { setSize(index) }}>
                        {e}
                    </span>);
                })
            }
        </div>
    </div>);
}

const SeccionCantidad = () => {
    const price = useSelector(selectPrice);

    const { cantidad,
        setCantidad } = useContext(CartContext);


    return (
        <div className="justify2">

            <div className="buttonNumero">
                <button onClick={() => { setCantidad(e => e - 1 < 0 ? 0 : e - 1) }}>-</button>
                <input type="text" value={cantidad} onChange={({ target }) => {
                    console.log(target.value);
                    setCantidad(parseInt(target.value));
                }} />
                <button onClick={() => { setCantidad(e => e + 1) }}>+</button>
            </div>
            <div className="rigth">
                total $ {(price.price_min / 100) * cantidad}
            </div>
        </div>);
}


const AddCartItem = ({ close }) => {
    const { size: sizeIndex, color: colorIndex, cantidad } = useContext(CartContext);
    const color = useSelector(selectOptions('Color'));
    const size = useSelector(selectOptions('Size'));

    const price = useSelector(selectPrice);

    const galery = useSelector(selectGalery);


    console.log({
        color, size
    });


    return (<Modal>

        <div className="contentModal">
            <div className="titelModal">
                <h1>You want to add this item to the shopping cart? <img style={{width:'70px'}} src={galery[0]} alt='imagen del producto' /></h1>
            </div>
            <div className="bodyModal">
                <div>
                    Color: {color.values[colorIndex]}
                </div>
                <div>
                    Size: {size.values[sizeIndex]}
                </div>
                <h4>
                Quantity : {cantidad} Total {price.price_min*cantidad}
                </h4>
            </div>

            <div className="footerModal">
                <div className="bottonera">

                <button className="btn" onClick={() => { close(false) }}>Cancel </button>
                <button className="btn black" onClick={() => { close(false) }}>Accept</button>
                </div>
            </div>

        </div>
    </Modal>);
}

const ButtonAdd = () => {
    const description = useSelector(selectDescription);

    const [isModalActive, setIsModalActive] = useState(false);

    const { cantidad } = useContext(CartContext);

    const handleAddCart = () => {
        setIsModalActive(true);
    }

    useEffect(() => {
        let time;
        if (isModalActive) {
            time = setTimeout(() => {
                setIsModalActive(false);
            }, 300000);
        }
        return () => {
            clearTimeout(time);
        }
    }, [isModalActive, setIsModalActive]);


    return (
        <div className="">

            <div >
                <button className="btn btn-2" >Add to Favorite</button>
                <button className="btn btn-2 black" onClick={handleAddCart} disabled={cantidad<1} >Add to Cart</button>
            </div>
            <p>
                {clearHtml(description)}
            </p>
            {
                isModalActive ? <AddCartItem close={setIsModalActive}></AddCartItem> : null
            }

        </div>);
}

const Detalle = () => {
    return (<>
        <Seccion1 />
        <hr />
        <SeccionColor />
        <hr />
        <SessionSize />
        <hr />
        <SeccionCantidad />
        <ButtonAdd />
    </>);
}



export const Product = () => {

    const { product } = useParams();
    const [unica, setUnica] = useState(true);
    const dispatch = useDispatch();
    const status = useSelector(selectProductStatus);


    const [color, setColor] = useState(0);
    const [size, setSize] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        const stop = setTimeout(() => {
            dispatch(asyncActionLoadProduct(`https://graditest-store.myshopify.com/products/${product}.js`));
        }, 1500);
        return () => {
            clearTimeout(stop);
        }
    }, [product, setUnica, unica, dispatch]);


    switch (status.loading) {
        case 'succeded':
            return (<CartContext.Provider value={{
                color,
                setColor,
                size,
                setSize,
                cantidad,
                setCantidad,
            }} >

                <div className="contentProduct">
                    <div className="row">
                        <Galeria />
                    </div>
                    <div className="row">
                        <Detalle />
                    </div>
                </div>
            </CartContext.Provider>);
        case 'rejected':
            return (<>

                <h2>Error </h2>
            </>);
        default:
            return (<>

<Modal>

<div className="contentModal">
    <div className="titelModal">
        <h1 style={{textAlaing:'center'}}>Loading...</h1>
    </div>




</div>
</Modal>
            </>);
    }


}