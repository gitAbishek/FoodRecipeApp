
const Section = ({items}) =>{
    console.log(items)
    return (
        <div className="section">
            {items.map((curElem)=>{
                const {id,title,category,image,price,description} = curElem;
                return (
                    <>
                     <div className="cart">
                     <div className="inside_cart">
                     <div className="id">{id}</div>
                     <div className="small_title">{title}</div>
                     <div className="title">{title}</div>
                     <div className="img">
                        <img src={image} alt="" />
                     </div>
                     <div className="button">
                        <button>Order Now</button>
                     </div>
                     </div>
                     </div>
                    </>
                )
            })}
        </div>
    )
}

export default Section