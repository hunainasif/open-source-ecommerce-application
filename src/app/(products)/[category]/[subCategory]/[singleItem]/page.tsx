import React from 'react'

export default function SingleItem({params}:{params:{category:string,subCategory:string,singleItem:string}}) {
  return (
    <div>
      {params.category}
      {params.subCategory}
      {params.singleItem}
    </div>
  )
}
