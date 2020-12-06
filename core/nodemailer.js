const nodemailer = require('nodemailer');


exports.sendEmail = async ({ from, to, subject, text, html }) => {

  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'todolistcesar@gmail.com',
          pass: 'todo3210'
      }
  });

  // send mail
  return await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html
  });
}

exports.sendEmailWithUrl = async (to, url)  => {
  var styleHeader = '<head> <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"> <style type="text/css">  body { font-family: "Open Sans", sans-serif;} .header { text-align: center; height: 100px; display: flex;  width: 100%; justify-content: center; align-items: center; } .logo { height: 50px; margin: auto;} h2 { font-size: 24px; color: #000;} p { color: #818181; font-size: 16px;}  footer { color: #818181; display: flex; align-items: center; text-align: center; justify-content: center; height: 150px; } footer p { text-align: center; margin: auto; } </style> </head>';
  var startBody = '<body> <div class="app"> <div class="authentication"> <div class="sign-up"> <div class="row no-mrg-horizon"> <div class="col-md-6 offset-md-3 no-pdd-horizon">  <div class="vertical-align full-height pdd-horizon-70"> <div class="table-cell"> <div class="header"> <img class="logo" src="" alt="">  </div> <div class="bg-white padding-40" style="width: 50%; margin: auto;">';
  var endBody = '</div> <footer> <p</p></footer> </div> </div> </div> </div> </div> </div> </div> </body>';
  
  return await this.sendEmail({
      from: '"TO DO LIST TEST" <noreply.todolist@gmail.com>',
      to,
      subject: 'Share List',
      html: styleHeader + startBody + '<p>'+url+'</p>' + endBody

  });
}