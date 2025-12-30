function TailwindCss() {
  return (
    <div>
        <h1 className='bg-amber-500'>Background Color</h1>

        <h1 className='text-green-500'>Text Color</h1>


        <h1 className='text-2xl'>Text Size</h1>

        <h1 className='text-center'>Text Center</h1>

        <h1 className='text-right'>Text Right</h1>

        <h1 className='text-shadow-2xs'>Text Shadow</h1>
        

        <h1 className='bg-amber-500 px-15'>Padding in X</h1>

        <h1 className='bg-amber-100 py-3'>Padding in Y</h1>

        <h1 className='bg-amber-500 p-5'>Padding</h1>


        <h1 className='border-1'>Border</h1>

        <h1 className='border-1 border-red-500'>Border with Color</h1>


        <h1 className='bg-amber-500 m-5'>Margin</h1>

        <h1 className='bg-amber-200 mx-25'>Margin</h1>

        <h1 className='bg-amber-500 my-3'>Margin</h1>

        <h1 className='bg-red-300 w-12'>Width</h1>

        <h1 className='bg-red-500 h-20'>Height</h1>

        <h1 className='bg-yellow-300 font-light'>Font Light</h1>

        <button className='bg-green-500 rounded-xl px-1 mx-29 my-1 hover:bg-blue-400 hover:text-white'>Submit</button>
    </div>
  )
}

export default TailwindCss