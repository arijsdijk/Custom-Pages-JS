
function openCustomPage(pageContext, paramPage, paramTitle, paramPosition, paramWidth, paramHeight){
   

   Xrm.Navigation.navigateTo({ 
      pageType: "custom",  
      name: paramPage, // "cr0d0_custommodal_d31f6",  
      entityName: pageContext.data.entity.getEntityName(),  
      recordId: pageContext.data.entity.getId()
      },

    
      {
      target:2, 
      position: paramPosition,
      width: {value:paramWidth, unit:"%"}, 
      height: {value: paramHeight, unit: "%"},
      title: paramTitle
      }


   ).then(console.log).catch(console.error);

   
}