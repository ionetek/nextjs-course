function Search(props) {
  function submitHandler(event) {
    event.preventDefault()

    const formData = {
      keyword: event.target[0].value || '_',
      year: event.target[1].value || '_',
      month: event.target[2].value || '_',
    }

    props.onSearch(formData)
  }

  return (
    <div className='mb-5'>
      <form onSubmit={submitHandler}>
        <div className='row'>
          {/*Keyword*/}
          <div className='col-12 col-md-5'>
            <label htmlFor='year' className='form-label'>
              Search
            </label>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Type to search...'
            />
          </div>

          {/*Year*/}
          <div className='col-6 col-md-3'>
            <label htmlFor='year' className='form-label'>
              Year
            </label>
            <select id='year' className='form-control form-control-lg'>
              <option value=''>Not selected</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>
          </div>

          {/*Month*/}
          <div className='col-6 col-md-3'>
            <label htmlFor='month' className='form-label'>
              Month
            </label>
            <select id='month' className='form-control form-control-lg'>
              <option value=''>Not selected</option>
              <option value='1'>January</option>
              <option value='2'>February</option>
              <option value='3'>March</option>
              <option value='4'>April</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>August</option>
              <option value='9'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>
          </div>

          {/*Submit*/}
          <div className='col-12 col-md-1 d-grid'>
            <label className='form-label opacity-0'>_</label>
            <button className='btn btn-primary btn-lg d-block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  )
}

export default Search
