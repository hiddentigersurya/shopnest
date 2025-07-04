
import React,{ useContext,useState } from "react";

const PaginationContext = React.createContext();

export default function PaginationProvider({children}){
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const pageProps = {pageSize, pageNum,setPageNum,setPageSize}
    return <PaginationContext.Provider value={pageProps}>
        {children}
    </PaginationContext.Provider>
}

//custom Hook
export const usePaginationContext = () =>{
    return useContext(PaginationContext);
}

// import React, { useContext, useState } from "react";

// const PaginationContext = React.createContext();

// export default function PaginationProvider({ children }) {
//     const [pageSize, setPageSize] = useState(4);
//     const [pageNum, setPageNum] = useState(1);
//     const pageProps = { pageSize, pageNum, setPageNum, setPageSize };
//     return (
//         <PaginationContext.Provider value={pageProps}>
//             {children}
//         </PaginationContext.Provider>
//     );
// }

// //custom Hook
// export const usePaginationContext = () => {
//     return useContext(PaginationContext);
// };