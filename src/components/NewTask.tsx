import { PlusCircle } from 'phosphor-react'

export function NewTask() {
  return (
    <form className='flex justify-center mx-auto mt-[-1.8rem] gap-2 max-w-[736px]'>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        className='flex-1 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700'
      />
      <button
        type='submit'
        className='flex items-center gap-2 p-4 rounded-lg text-base-gray-100 bg-product-blue-dark'
      >
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )

}