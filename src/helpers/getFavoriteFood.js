
export const getFavoriteFood = (meal=[])=>{
  
  meal = deleteNull(meal);
  //console.log(meal);
  let newMeal = [];
  const ingredients = [];
  const measure = [];

  let init = 1;
  let meas = 1;
  for(const [key, values] of Object.entries(meal)){
    
    if(key === `strIngredient${init}`) {
      ingredients.push(values);
      init ++;
    }else if(key === `strMeasure${meas}`) {
      measure.push(values)
      meas ++;
    }else {
      newMeal[key]=values;
    }
    
  }
  newMeal.measure = measure;
  newMeal.ingredients = ingredients;

  return newMeal;      
}

const deleteNull = (meal =[]) => {
  return Object.fromEntries(Object.entries(meal[0]).filter(([_, value]) => 
  value !== '' && value !== ' ' && value !==null ));
}