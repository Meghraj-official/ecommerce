import React from 'react'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  total: number
  itemsPerPage: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (page: number) => void
  currentPage: number
}

const Pagination = (props: PaginationProps) => {
  const { total, itemsPerPage, currentPage } = props

  const handlePageChange = ({ selected }: any) => {
    console.log(selected)
    if (props.onChange) {
      props.onChange(selected)
    }
  }

  console.log(currentPage)

  if (total <= itemsPerPage) {
    return null
  }

  return (
    <ReactPaginate
      renderOnZeroPageCount={null}
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      forcePage={currentPage}
      breakClassName="space-x-2"
      pageCount={Math.ceil(total / itemsPerPage)}
      marginPagesDisplayed={2}
      nextLinkClassName="text-primary-800 font-medium ml-10"
      previousClassName="text-primary-800 font-medium mr-10"
      pageRangeDisplayed={5}
      pageClassName="font-medium px-4"
      onPageChange={handlePageChange}
      containerClassName="flex space-x-2 lg:justify-center items-center mt-10 flex-wrap"
      activeClassName="bg-primary-800 focus:outline-none !text-white h-8 w-8 text-center rounded-full flex items-center justify-center"
    />
  )
}

export default Pagination
