const nodemailer = require("nodemailer");
      console.log("initatted mail")
      let transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "rajeshkumaracet@gmail.com",
          pass: "11tc2446"
        }
      });
      
      let mailOptions = {
        from: "rajeshkumaracet@gmail.com",
        to: "acetrajeshkumar@gmail.com",
        subject: "Report for Test Result",
      
        text: "Contains the test result for the smoke test in html file"
      };
      transport.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Message sent: " + info.response);
        }
      });

  
