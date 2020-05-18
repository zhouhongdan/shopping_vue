export default new Router({
   routes:[
       {   path:'/name/:id',components:'name',name:'name',
           children:[
              {path:'name1',components:'name1',name:'name1'},
              {path:'name2',components:'name2',name:'name2'},
           ],
        }
   ]
})