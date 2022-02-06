const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

var sendMail = {
    send : function(toEmail,ccEmail,fromEmail,subject, html){
        //data verification
        //mandatory data
        if( toEmail == null )
        {
            return null;
        }

        const msg = {
            to: toEmail,
            cc: ccEmail,
            //bcc: bccEmail,
            from: fromEmail,            
            subject: subject,
            html: html
            //text: text
          }

          sgMail
            .send(msg)
            .then(() => {
            console.log('Email Sent')
            })
            .catch((error) => {
            console.error(error)
            })
    },
    send2: function(toEmail,fromEmail,subject, html){
        //data verification
        //mandatory data
        if( toEmail == null )
        {
            return null;
        }

        const msg = {
            to: toEmail,
            //cc: ccEmail,
            //bcc: bccEmail,
            from: fromEmail,            
            subject: subject,
            html: html
            //text: text
          }

          sgMail
            .send(msg)
            .then(() => {
            console.log('Email Sent')
            })
            .catch((error) => {
            console.error(error)
            })
    }
}

module.exports = sendMail