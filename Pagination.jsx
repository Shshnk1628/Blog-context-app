import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Pagination(){

    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return(
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white shadow-md">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <div flex gap-x-2>
            { page > 1 &&
                    (<button className="rounded-md border-2 px-4 py-1"
                    onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </button>)
                }

                { page < totalPages &&
                    (<button className="rounded-md border-2 px-4 py-1"
                    onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>)
                }
            </div>
                

                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}