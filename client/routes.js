FlowRouter.route('/', {
    name: 'Home',
    action(params, queryParams) {
          console.log("Home sweet home !");
           BlazeLayout.render('App_body', {main: 'home', title:"FitWEB"});
    }
});
