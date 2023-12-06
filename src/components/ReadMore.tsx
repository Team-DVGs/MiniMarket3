import React, {useState, useEffect, useRef} from 'react'

interface readmoreProps{
    lineShown: number,
    txtElement: JSX.Element
}
const ReadMore = (props: readmoreProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showReadMore, setShowReadMore] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [flag, setflag] = useState<boolean>(false);
  const styles = {
    paragraph: {
      WebkitLineClamp: props.lineShown.toString(),
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      display: "-webkit-box",
    },
  };

  useEffect(() => {
    if (ref.current) {
      const firstChild = ref.current.querySelector(":first-child") as HTMLElement;
      if (firstChild){
        if (!flag){
            console.log(firstChild.scrollHeight, firstChild.clientHeight)
            setShowReadMore(firstChild.scrollHeight !== firstChild.clientHeight);
            setflag(true);
        }
        if (isOpen){
            firstChild.style.webkitLineClamp = '';
            firstChild.style.webkitBoxOrient = "";
            firstChild.style.overflow = "";
            firstChild.style.display = "";
        }
        else{
            firstChild.style.webkitLineClamp = styles.paragraph.WebkitLineClamp;
            firstChild.style.webkitBoxOrient = styles.paragraph.WebkitBoxOrient;
            firstChild.style.overflow = styles.paragraph.overflow;
            firstChild.style.display = styles.paragraph.display;
        }
      }
      
    }
  }, [isOpen]);
  return <div className='readmore' ref={ref}>
    {props.txtElement}
    {showReadMore && 
        <span onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? "Thu gọn" : "Đọc thêm"}
        </span>
    }
  </div>;
};

export default ReadMore