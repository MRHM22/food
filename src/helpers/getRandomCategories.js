export const getRandomCategories = (categories = [])=>{
    let newListCategories= [];
    let listPosition = savePosition(categories);

    listPosition.forEach(element => {
        newListCategories.push(searchCategory(categories,element));
    });

    return newListCategories;
}

const numeroRandom = (valor) => {
    return Math.round(Math.random() * valor) ;
}

const searchCategory = (categories = [],position)=>{
    return categories.find((category) => category.idCategory==position);
}
const savePosition = (categories)=>{
    const showMin = 6;
    let listPosition =[]; 
    while(listPosition.length < showMin){
        let position = numeroRandom(categories.length);
        if(position !==0){
            const exists = listPosition.some( (p) => p  === position );
            if(!exists){
                listPosition.push(position);
            }
        }   
    }
    return listPosition;
}