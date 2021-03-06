
import { useState, useEffect, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectThemeconfig } from './../../../core/store/theme/selectors/selector';

//constext
export const CarrouselContext = createContext(null);


const Item = ({
    item
}) => {

    const { items, isImg } = useContext(CarrouselContext);

    return (<div className='itemCarrusel ' style={{ width: (100 / items.length) + '%' }}>
        {
            isImg ? <img src={item} alt='imagen del producto' /> : item
        }
    </div>);
}

const FooterCarousel = () => {
    //720px width
    const widthScreen = useSelector(selectThemeconfig).width;

    const { active, items, setActive, isImg } = useContext(CarrouselContext);

    const [points, setPoints] = useState([]);

    useEffect(() => {

        let array = [];

        if (widthScreen <= 768) {
            for (let i = active - 2; i < active + 3; i++) {
                let index = i;
                if (i < 0) {
                    index = items.length + i;
                } else if (i >= items.length) {
                    index = i % items.length;
                }
                array.push(index);
            }
        } else {
            for (let i = active - 1; i < active + 2; i++) {
                let index = i;
                if (i < 0) {
                    index = items.length + i;
                } else if (i >= items.length) {
                    index = i % items.length;
                }
                array.push(index);
            }
        }

        setPoints(array);
    }, [active, setPoints, widthScreen, items]);



    return (<>
        <div className='bodyMinuatura'>
            {

                points.map((e, indice) => {
                    return <div onClick={() => setActive(e)} className='bodyMinuaturaItem' key={indice}>

                        {
                            isImg ?
                                <img src={items[e]} alt='miniatura del producto' />
                                : items[e]
                        }
                    </div>;
                })
            }

        </div>

    </>);
}

export const Carousel = ({ items, isImg }) => {

    const [active, setActive] = useState(2);

    return (<CarrouselContext.Provider value={{
        active,
        setActive,
        items,
        isImg
    }}>

        <div className="BodyCarrusel">
            <div className='ContenCarrousel' style={{ width: (100 * items.length) + "%", transform: "translateX(-" + ((100 / items.length) * active) + "%)" }}>
                {
                    items.map((e, indice) => {
                        console.log(e);
                        return <Item key={indice} item={e} />
                    })
                }
            </div>
            <FooterCarousel />
        </div>
    </CarrouselContext.Provider>);
}