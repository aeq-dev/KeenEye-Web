import ProductCardItem from "./ProductCardItem"

const ProductTypeCardItem = ({ category, imgLoader }) => (
    <div>                                                                               
        <h6 className="text-xl text-orange-500 font-bold dark:text-white mb-4">{category.name}</h6>
        <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 mb-10">
        {category['products'].map((product, index2) => (
                <div key={index2}>                                                    
                    <ProductCardItem imgLoader={imgLoader} product={product}/>
                </div>
            ))}
            </div>
    </div>
)

export default ProductTypeCardItem
