import React from "react";
// import test from './sendEmail';

export default function EmailForm() {

//     const email_to = document.querySelector('#email-to');
// const subject = document.querySelector('#subject');
// const message = document.querySelector('#message');
// const submit = document.querySelector('.submitted');
// const mail_data = document.querySelector('.mail-data');
// mail_data.innerHTML = '';

// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };






// const onSubmit = data => {
 
//     window.Email.send({
//         SecureToken : process.env.SecureToken,
//         To : to, // to include multiple emails you need to mention an array
//         From : process.env.USERNAME,
//         Subject : subject,
//         Body : message
//    }).then(message=>{
//     // alert(message);
//     mail_data.innerHTML = `Email was successfully sent to ${to}<br>` + mail_data.innerHTML;
// }).catch(err=>{
//     mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;
// });

// }

// const sendEmail = async (e) => {
//     e.preventDefault();
//     const email_to = document.querySelector('#email-to').value;
//     const subject = document.querySelector('#subject');
//     const message = document.querySelector('#message');
//     // const submit = document.querySelector('.submitted');
//     const mail_data = document.querySelector('.mail-data');
//     var to = email_to;
    
//     // to = to.split(',');
    

//     console.log(to,subject,message,mail_data);
//     window.Email.send({
//       Host: "smtp.gmail.com",
//       Username: process.env.USERNAME,
//       Password: process.env.PASSWORD,
//       To: to,
//       From: process.env.USERNAME,
//       Subject: subject.value,
//       Body: message.value,
//     //   Attachments: [
//     //     {
//     //       name: "File_Name_with_Extension",
//     //       path: "Full Path of the file"
//     //     }]
//     })
//     .then(message=>{
//         // alert(message);
//         mail_data.innerHTML = `Email was successfully sent to ${to}<br>` + mail_data.innerHTML;
//     }).catch(err=>{
//         mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;
//     });
//   }



  // const submitbtn = async (e) => {
//     e.preventDefault();
    
//     if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
//         submit.type = 'submit';
//     else {
//         submit.type = 'submit';

//         await fetch('https://movers-san-francisco.com/email_sender.php', {
//              method:   'POST',
//              'Accept': 'application/json',
//              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//              body:     'email_message=' + JSON.stringify({
//                        'mail_to': email_to.value,
//                        'mail_subject': subject.value,
//                        'mail_message': message.value
//                       })
//         }).then(response => response.json()).then(data => {
            
//             if (data.result == 'success') {
//                 mail_data.innerHTML = `Email was successfully sent to ${data.email_to}<br>` + mail_data.innerHTML;
//                 console.log(data);
//             }
//             else
//                 mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

//         })
//     }
// }





//   e.preventDefault();
  const email_to = document.querySelector('#email-to').value;
  const subject = document.querySelector('#subject');
  const message = document.querySelector('#message');
  const submit = document.querySelector('.submitted');
  const mail_data = document.querySelector('.mail-data');
  var to = email_to;
  
  to = to.split(',');


  const submitbtn = async (e) => {
    e.preventDefault();

  if(to.length==1){

  


  submitbtn.click() = async (e) => {
    e.preventDefault();
    
    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        await fetch('https://movers-san-francisco.com/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': to[0],
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${data.to[0]}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        })
    }
}
  }

    else if (to.length!=1){
        for(let i = 0; i<to.length;i++){
            submitbtn.click() = async (e) => {
    e.preventDefault();
    
    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        await fetch('https://movers-san-francisco.com/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': to[i],
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${data.to[i]}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        });
    }
}
        }
    }
  }
    return (
        
    
    <div>
        <br />
        <br />
        <br />

            <p>
            If there were more than one email address then  you may enter the email addresses with ',' inbetween the email addresses.
            <br/>
            </p>
            <p>
            The subject and message are same for all the email address that you may enter on the input field.
            <br/>
            </p>

        <form>
            <br />
            <br />
            <label htmlFor="email">Email To:</label>
            <input type="email" placeholder="You man enter email address on here. For example : hufutogaloge@gotgel.org,jagadeesh_2k17@proton.me" id="email-to" required />
            <br />
            <br />
            <label for="subject">Subject:</label>
            <input type="text" placeholder="You may enter subject on here." id="subject" required />
            <br />
            <br />
            <label htmlfor="message">Message:</label>
            <textarea placeholder="You may enter the message on here." id="message" rows="7" required></textarea>
            <br />
            <br />
            <input type="submit" onClick={submitbtn} className="submitted" value={"Send"}/>
        </form>
        <div className="mail-data"></div>
    </div>
    
    )
}