// 다른 컴포넌트에서 Button 컴포넌트를 사용하는 예시
import React from 'react';
import Button from './Button';
import CategoryItem from './CategoryItem';

const CategoryList({Items})=>{
    return(
        <div>
            {todos.map(Item=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    )
}
export default CategoryList;