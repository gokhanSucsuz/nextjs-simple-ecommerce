import React from 'react'

const CategoryDetail = (props) => {
    console.log("category detail", props.params)
    return (
        <div>
            {props.params.categoryId}. Products Detail
        </div>
    )
}

export default CategoryDetail
