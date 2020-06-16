<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>



<body>
    <div class="container-fluid mt-4">
        <div class="header text-center">
            <h1 class="text-info">Register</h1>
        </div>
    </div>


    <form action="reg.php" method="post" onSubmit="return validation()">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-md-6 col-sm-6">

                    <div class="row">
                        <div class="col">
                            <input type="text" id="fname" name="fname" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" name="lname" class="form-control" placeholder="Last name">
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col">
                            <input type="text" id="email" name="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col">
                            <input type="text" id="dob" name="dob" class="form-control" placeholder="DOB">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <input type="text" id="psw" name="psw" class="form-control" placeholder="Password">
                        </div>
                        <div class="col">
                            <input type="text" id="cpsw" name="cpsw" class="form-control" placeholder="Confirm Password">
                        </div>
                    </div>
                    <br>
                    <div class="form-group row">
                        <div class="col-lg-6">
                            <button type="submit" name="submit" value="submit" class="btn btn-success btn-sm float-right">Register</button>

                        </div>

                        <div class="col-lg-6">
                            <button type="reset" class="btn btn-primary btn-sm float-left">Clear</button>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    </form>




    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>