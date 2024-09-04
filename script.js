
//contact email
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adindanurfitri41@gmail.com",
        Password : "D44C5820E2F413EDC446D1D660BA8D1C0FB8",
        To : 'adindanurfitri41@gmail.com',
        From : "dinaduts@gmail.com",
        Subject : "subject.value",
        Body : "And this is the body"
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      }
    );
}