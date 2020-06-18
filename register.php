<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="js/val.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>



<body>
    <div class="container-fluid mt-4">
        <div class="header text-center">
            <h1 class="text-info">Register</h1>
        </div>
    </div>

   
    <form method="post" name="regform" id="insert_form" action="reg.php" onSubmit="return validation()">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-md-6 col-sm-6">

                    <div class="row">
                        <div class="col">
                            <input type="text" id="fname" name="fname" class="form-control" value="" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" name="lname" class="form-control" value="" placeholder="Last name">
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col">
                            <input type="text" id="email" name="email" class="form-control" value="" placeholder="Email">
                        </div>
                        <div class="col">
                            <input type="text" id="dob" name="dob" class="form-control" value="" placeholder="DOB">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <input type="text" id="psw" name="psw" class="form-control" value="" placeholder="Password">
                        </div>
                        <div class="col">
                            <input type="text" id="cpsw" name="cpsw" class="form-control" value="" placeholder="Confirm Password">
                        </div>
                    </div>
                    <br>
                    <div class="form-group row">
                        <div class="col-lg-6">
                            <button type="submit" id="submit" name="submit" class="btn btn-success btn-sm float-right">Register</button>
                        </div>

                        <div class="col-lg-6">
                            <button type="reset" class="btn btn-primary btn-sm float-left">Clear</button>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    </form>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

    <script>
        // $(document).on('click', '.submit', function() {
        //     var fname = $('#fname').val();
        //     var lname = $('#lname').val();
        //     var email = $('#email').val();
        //     var dob = $('#dob').val();
        //     var psw = $('#psw').val();
        //     var cpsw = $('#cpsw').val();

        //     $.ajax({
        //         url: "controllers/reg.php",
        //         type: 'POST',
        //         dataType: 'json',
        //         data: {
        //             fname: fname,
        //             lname: lname,
        //             email: email,
        //             dob: dob,
        //             psw: psw,
        //             cpsw: cpsw,
        //             stat: 'save'
        //         },
        //         success: function(data) {

        //             $('#fname').val('');
        //             $('#lname').val('');
        //             $('#email').val('');
        //             $('#dob').val('');
        //             $('#psw').val('');
        //             $('#cpsw').val('');

        //             if (data.status == true) {
        //                 Swal.fire({
        //                     position: 'center',
        //                     icon: 'success',
        //                     title: 'Your work has been saved',
        //                     showConfirmButton: false,
        //                     timer: 1500,
        //                 });
        //             } else {
        //                 swal.fire({
        //                     title: "Error saving data!",
        //                     type: "error",
        //                     showCancelButton: false,
        //                     showConfirmButton: 'btn-danger',
        //                     confirmButtonText: 'OK!'
        //                 });
        //             }
        //         }
        //     });
        // });

//         $(document).ready(function() {
//                     $('#insert_form').on("submit", function(event) {
//                         event.preventDefault();
                      

//                         $.ajax({
//                             url: "controllers/reg.php",
//                             type: 'POST',
//                             dataType: 'json',
//                             data: {
//                                 fname: fname,
//                                 lname: lname,
//                                 email: email,
//                                 dob: dob,
//                                 psw: psw,
//                                 cpsw: cpsw,
//                                 stat: 'save'
//                             },
//                             success: function(data) {

//                                 $('#fname').val('');
//                                 $('#lname').val('');
//                                 $('#email').val('');
//                                 $('#dob').val('');
//                                 $('#psw').val('');
//                                 $('#cpsw').val('');

//                                 if (data.status == true) {
//                                     Swal.fire({
//                                         position: 'center',
//                                         icon: 'success',
//                                         title: 'Your work has been saved',
//                                         showConfirmButton: false,
//                                         timer: 1500,
//                                     });
//                                 } else {
//                                     swal.fire({
//                                         title: "Error saving data!",
//                                         type: "error",
//                                         showCancelButton: false,
//                                         showConfirmButton: 'btn-danger',
//                                         confirmButtonText: 'OK!'
//                                     });
//                                 }
//                             }
//                         });
                        

//                     });  
//  });

    </script>
</body>

</html>

