module.exports = function(app) {

  app.models.user.create({
    password: 'user',
    email: 'user2@test.com'
  }, function(err, user){

    app.models.payment_detail.create({
      user_id: user.id
    }, function(err, paymentDetails){

    })

    user.createAccessToken(53000, function(err, token){
      console.log(token);
    });

  })

  app.models.user.create({
    password: 'user2',
    email: 'user2@test.com'
  }, function(err, user){

    app.models.payment_detail.create({
      user_id: user.id
    }, function(err, paymentDetails){

    })

  })

  app.models.contact.create({
    user_id: 1,
    contact_user_id: 2
  }, function(err, user){

  })

};