const  compare = ( a, b ) => {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

module.exports = (routes,{componentName,componentFileName}) => {
  const componentMenuObject = routes.filter(obj => {
    return obj.title ===  "Components";  
  })
  const componentPages = componentMenuObject[0].subNav
  const templateObject = {
    title: componentName,
    page: true,
    id: `/components/${componentFileName}`
  }
  componentPages.push(templateObject)

  const orderedObject = componentPages.sort( compare );
  return JSON.stringify(routes,null,"  ");  
};
