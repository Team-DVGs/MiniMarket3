import React, { useState, useEffect} from 'react'
interface sliderProps {
    id: number,
    length: number,
    numberShown: [number,number,number], 
    productsJSX: JSX.Element, // products jsx map (every <Product> must be wrapped by a div (productslider__inner-item))
    sliding: boolean,
    loading: boolean,
    reload?:number
}
const ProductSlider = (props: sliderProps) => {
  const [index, setIndex] = useState<number>(0);
  const [numberShown, setNumberShown] = useState<number>(4);
  useEffect(() => {
    updateDivChildren(index, numberShown);

    if (!props.sliding) return;
    const timeoutId = setTimeout(() => {
    handleClicked(true);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index,props.loading, props.reload]);
  useEffect(() => {
    // Set numberShown
    let n = numberShown;
    const screenWidth = window.innerWidth;
    if (screenWidth < 767) n = props.numberShown[0];
    else if (screenWidth > 767 && screenWidth <= 991) n = props.numberShown[1];
    else n = props.numberShown[2];
    if (n!==numberShown){
        setNumberShown(n);
        updateDivChildren(index, n);
    }
    // Set styles
  }, [window.innerWidth]);
  useEffect(() => {
    setIndex(0);
  }, [numberShown, props.reload])
  

  // Functions 
  const updateDivChildren = (index: number, numberShown: number) => {
    const directDivChildren = document.querySelectorAll(
      `.productslider-inner-${props.id} > div`
    );
    if (directDivChildren) {
      directDivChildren.forEach((div) => {
        (div as HTMLElement).style.transform = `translateX(${-100 * index}%)`;
        // (div as HTMLElement).style.width = `calc(100% / ${numberShown})%`;
        // (div as HTMLElement).style.width = `calc(100% / ${numberShown})`;
        (div as HTMLElement).style.flexBasis = `calc(100% / ${numberShown})`;
        (div as HTMLElement).classList.add("productslider__item");
      });
    }
  }
  const handleClicked = (isRight: boolean) => {
    const n = props.length - numberShown;
    if (n < 0) return;
    if (!isRight) {
      if (!index) setIndex(n);
      else setIndex((prev) => prev - 1);
    } else {
      if (index === n) setIndex(0);
      else setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={`position-relative productslider`}>
      {/* Product List */}
      <div
        className={`d-flex overflow-hidden productslider-inner-${props.id} ${
          numberShown >= props.length && "justify-content-center"
        }`}
      >
        {/* {props.dailybest.map((item) => (
          <div
            className="col-6 col-lg-3 px-1 transition-fast"
            style={{ transform: `translateX(${-100 * index}%)` }}
          >
            <Product product={item} />
          </div>
        ))} */}
        {props.productsJSX}
      </div>
      {/* Buttons */}
      {numberShown < props.length && (
        <>
          <button
            className="productslider__btn productslider__btn-left"
            onClick={() => handleClicked(false)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="productslider__btn productslider__btn-right"
            onClick={() => handleClicked(true)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default ProductSlider