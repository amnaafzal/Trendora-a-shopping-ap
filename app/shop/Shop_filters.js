import React from 'react'

const Shop_filters = ({ filters, filterState, setFilterState, clearFilter }) => {


    return (
        <div className='space-y-5 flex-shrink-0 flex  flex-col  gap-2 md:w-[8vw] '>
            <h1 className='font-medium text-xl'>Filters</h1>
            <div className='filters leading-7 gap-2'>
                <h4>Category</h4>
                <hr className='text-gray-300' />
                <div className="filter_option">
                    {
                        filters.category.map(cat => (
                            <label key={cat} className='capitalize flex'>
                                <input type="radio" id='category' name='category' value={cat}
                                    checked={filterState.category === cat}
                                    onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                                /><span className='ml-1'>{cat}</span>
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className='filters leading-7'>
                <h4>Color</h4>
                <hr className='text-gray-300'/>
                <div className="filter_option">
                    {
                        filters.colors.map(color => (
                            <label key={color} className='capitalize flex'>
                                <input type="radio" id='color' name='color' value={color}
                                    checked={filterState.color === color}
                                    onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
                                /><span>{color}</span>
                            </label>
                        ))

                    }
                </div>
            </div>
            <div className='filters leading-7'>
                <h4>Price</h4>
                <hr className='text-gray-300' />
                <div className="filter_option">
                    {
                        filters.priceRange.map(price => (
                            <label key={price.label} className='capitalize flex'>
                                <input type="radio" id='price.label' name='price' value={price.label}
                                    checked={filterState.priceRange?.label === price.label}
                                    onChange={() => setFilterState({ ...filterState, priceRange: price })}
                                /><span>{price.label}</span>
                            </label>
                        ))
                    }
                </div>
            </div>

            <button className='bg-red-600 text-white px-4 py-1' onClick={clearFilter}>Clear Filter</button>
        </div>
    )
}

export default Shop_filters
