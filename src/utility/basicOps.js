export default function basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize) {
    let filteredArr = products;
    if(searchTerm != ""){
        let lowerValue = searchTerm.toLowerCase();
         filteredArr = filteredArr.filter((item)=>(
            item.title.toLowerCase().includes(lowerValue)
        ))
    }

    let filteredSortedArr = filteredArr;
    if(sortDir!=0){
        if(sortDir==1){
            filteredArr=filteredSortedArr.sort(inComparator);
        }else{
            filteredArr=filteredSortedArr.sort(decComparator);
        }
    }

    let categoryFiltered = filteredArr;
    if(currCategory!="All Categories"){
        filteredArr=categoryFiltered.filter((item)=>item.category==currCategory);
        // console.log(categoryFiltered);
        console.log(currCategory);
    }
    // Pagenation
    let totalPages = Math.ceil(filteredArr.length/pageSize);
    let sidx = (pageNum - 1) * pageSize;//1-1*4=>
    let edx = (sidx) + pageSize;
    filteredArr = filteredArr.slice(sidx,edx)

    return {filteredArr,totalPages}
}

function inComparator(product1, product2){
    if(product1.price > product2.price){
        return 1;
    }else{
        return -1;
    }
}

function decComparator(product1,product2){
    if(product1.price<product2.price){
        return 1;
    }
    else{
        return -1;
    }
}
/**
 * [0,3], [4,7], [8,11], [12,15], [16,20]
 * 
 */