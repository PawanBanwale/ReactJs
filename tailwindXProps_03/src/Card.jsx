import React from 'react'

function Card({username,obj}) {
  return (
      <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username} : {obj.age}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
     </>   
  )
}

export default Card