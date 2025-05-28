import React from 'react'

function Card(props){
    console.log(props.insta)
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.insta}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.nametext}</h2>
        </div>
        <p className="text-gray-300">
          {props.description}
        </p>
      </div>
    )
}

export default Card