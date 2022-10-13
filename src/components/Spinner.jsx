import PuffLoader from "react-spinners/PuffLoader";

const Spinner = ({loading}) => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <PuffLoader
                color="#ea580c"
                loading={loading}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner