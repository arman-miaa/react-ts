
type DataFetchProps = {
    status: 'success' | 'error' | 'loading';
    
 };

const DataFetch = ({ status }: DataFetchProps ) => {
    if (status === 'loading') {
        return <h2>Data is loading....</h2>;
    } else if (status === 'error') {

     return   <h2>Error. Data could not Fecthed</h2>
    }
  return (
      <div>
          <h2>Data fetched Successfully</h2>
    </div>
  )
}

export default DataFetch