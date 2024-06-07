import React, { useEffect, useState } from 'react'

const Modal = ({modalHeader, modalDetails, onClickContinue, modalState, setModalState}) => {
  const [modal, setModal] = useState(modalState);

  useEffect(() => {
    setModal(modalState);
  },[modalState])

  const cancelOnclick = () =>
    {setModal(false);
      setModalState(false);
    }
  return(
    modal ?
    <div className='fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgb(209 213 219 / 0%)] pt-12'>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h2 className="text-xl font-semibold">{modalHeader}</h2>
                <button className="text-gray-600 hover:text-gray-900 font-bold" onClick={() =>  {setModal(false); setModalState(false);}}>&times;</button>
            </div>
            <form>
                <p className='mb-5'> {modalDetails}</p>
                
                <div className="flex justify-end">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2" onClick={() => cancelOnclick()} type='button'>Cancel</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClickContinue} type='button'>Proceed</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    : null
    
  )
}

export default Modal
