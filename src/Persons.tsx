import React from 'react'

type PersonProps={
    name:{
        first:string 
        last:string 
    }
}
export const Persons=(props:PersonProps)=> {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}


