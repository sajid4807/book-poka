const getReadBook = () =>{
    const setBookData = localStorage.getItem('readList')
    if(setBookData){
        const storeBookData = JSON.parse(setBookData)
        return storeBookData;
    }
    else{
        return [];
    }
}

const addToStoreBD = (id) => {
    const storeBookData = getReadBook();
    if(storeBookData.includes(id)){
        alert('already exist')
    }else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData)
        // console.log(data)
        localStorage.setItem('readList',data)
    }
}

export {addToStoreBD,getReadBook}