
$('.deleteRow').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href')

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })
});


const flashdata = $('.flash-data').data('flashdata')
if (flashdata) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Record Has Been Deleted!',
        timer: 1500
    })
}


const flashdataUpdate = $('.flash-data-update').data('flashdata')
if (flashdataUpdate) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Record Has Been Updated!',
        timer: 1500
    })
}

const leaveSuccess = $('.leave-success').data('flashdata')
if (leaveSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Leave Successfully Added!',
        timer: 1500
    })
}

// PENDING ORDER CONFIRMED 
const flashdataOrderConfirm = $('.flash-data-order-confirm').data('flashdata')
if (flashdataOrderConfirm) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Order Confirmed!',
        timer: 1500
    })
}


const flashDataCartOrderSuccess = $('.flash-data-order-successfull').data('flashdata')
if (flashDataCartOrderSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Order has been placed '
    })
}

const errorPwdUpdate = $('.flash-data-new-pwd-update').data('flashdata')
if (errorPwdUpdate) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password has successfully changed '
    })
}

// CONFIRM ORDER HAS CANCLED 
const flashdataOrderCancle = $('.flash-data-order-cancle').data('flashdata')
if (flashdataOrderCancle) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Order Successfully Cancled!',
        timer: 1500
    })
}

// ORDER SENT TO THE WEB SITE CUSTOMER 
const flashdataOrderSent = $('.flash-data-order-sent').data('flashdata')
if (flashdataOrderSent) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Order Successfully Sent To the Customer !'
    })
}

// Contact Success
const contactSuccess = $('.flash-data-contact-success').data('flashdata')
if (contactSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your Message successfully sent !'
    })
}

// Category Add Success
const categorySuccess = $('.flash-data-category-success').data('flashdata')
if (categorySuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product Category Successfully Added !'
    })
}

// Category Add Success
const categoryDelete = $('.flash-data-category-delete').data('flashdata')
if (categoryDelete) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product Category Successfully Deleted !'
    })
}

// User Iamge Remove Success
const userImgDel = $('.flash-data-user-img-remove').data('flashdata')
if (userImgDel) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Image Successfully Removed !'
    })
}


// Category Add Success
const categoryUpdate = $('.flash-data-category-update').data('flashdata')
if (categoryUpdate) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product Category Successfully Updated !'
    })
}

// Message Delete  Success
const msgDelete = $('.flash-data-msg-delete').data('flashdata')
if (msgDelete) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Message Successfully Deleted !'
    })
}

const bSalSuccess = $('.basic-salary-success').data('flashdata')
if (bSalSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Basic Salary Successfully Added!'
    })
}

const empDesignation = $('.emp-designation-success').data('flashdata')
if (empDesignation) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Succesully Added!'
    })
}

const recordSuccess = $('.emp-salary-success').data('flashdata')
if (recordSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Succesully Added!'
    })
}

// Delete Registered Users
const regUserDelete = $('.flash-data-reg-user-delete').data('flashdata')
if (regUserDelete) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User successfully Banned !'
    })
}

// Active Registered Users
const regUserActive = $('.flash-data-user-active').data('flashdata')
if (regUserActive) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User successfully Active Again !'
    })
}

//Register success
const signinSuccess = $('.flash-data-signin-success').data('flashdata')
if (signinSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully Registered, Just Login !'
    })
}

//Register success
const addFinance = $('.flash-data-add-finance').data('flashdata')
if (addFinance) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully Details Added!'
    })
}

//Register success
const msgSentSuccess = $('.flash-data-msg-sent-success').data('flashdata')
if (msgSentSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Reply message successfully sent!'
    })
}

//Login success
const loginSuccess = $('.flash-data-login-success').data('flashdata')
if (loginSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully Logged !'
    })
}

//Record Delete success
const recordDelete = $('.flash-data-record-del').data('flashdata')
if (recordDelete) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Record Successfully Deleted!'
    })
}

//New Admin Register success
const newadminAdd = $('.flash-data-user-reg-success').data('flashdata')
if (newadminAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'New Admin Successfully Added to the DB'
    })
}

//Record Delete success
const cusAdd = $('.flash-data-cus-add').data('flashdata')
if (cusAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Customer Successfully Added to the System!'
    })
}

//Image Add success
const imgAdd = $('.flash-data-image-add').data('flashdata')
if (imgAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Image Succesfully Add!'
    })
}

//Employee add success
const empAdd = $('.flash-data-emp-add').data('flashdata')
if (empAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Employee Successfuly Add to the System!'
    })
}

//Item in
const itemIn = $('.flash-data-item-in').data('flashdata')
if (itemIn) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Already in the DB!'
    })
}

//Item add success
const itemAdd = $('.flash-data-item-add').data('flashdata')
if (itemAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Successfully Add to the System!'
    })
}


//Item add success
const adminImgDel = $('.flash-data-admin-image-del').data('flashdata')
if (adminImgDel) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile Image successfully Deleted'
    })
}

//Item add success
const adminImgUpload = $('.flash-data-admin-image-upload').data('flashdata')
if (adminImgUpload) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile Image successfully Uploaded'
    })
}


const flashDataCartView = $('.flash-data-cart-view').data('flashdata')
if (flashDataCartView) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Successfully Removed !'
    })
}

const adminUpdateSuccess = $('.flash-data-admin-update-success').data('flashdata')
if (adminUpdateSuccess) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User Details successfully Updadted !'
    })
}

//vehicle add success
const vehicleAdd = $('.flash-data-vehicle-add').data('flashdata')
if (vehicleAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Vehicle Successfully Add to the System!'
    })
}

//vendor add success
const vendorAdd = $('.flash-data-vendoe-add').data('flashdata')
if (vendorAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Vendor Successfully Add to the System!'
    })
}


const flashDataCartAdd = $('.flash-data-cart-add').data('flashdata')
if (flashDataCartAdd) {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item Successfully Added !'
    })
}


// No Upper Case for password
const noUpper = $('.flash-data-no-upper').data('flashdata')
if (noUpper) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Include at least one upper case for the password !'
    })
}

// No Upper Case for password
const cartLoginError = $('.flash-data-order-login-error').data('flashdata')
if (cartLoginError) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'Please login before purchase !'
    })
}

// No Lower Case for password
const noLower = $('.flash-data-no-lower').data('flashdata')
if (noLower) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Include at least one lower case for the password !'
    })
}

// No Number Case for password
const noNumber = $('.flash-data-no-number').data('flashdata')
if (noNumber) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Include at least one number for the password !'
    })
}

//password Doent match
const noMatchPwd = $('.flash-data-no-match').data('flashdata')
if (noMatchPwd) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password doesnt match with the password !'
    })
}

//user taken
const userTaken = $('.flash-data-user-taken').data('flashdata')
if (userTaken) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'User Name Taken, Try different !'
    })
}


// EMPTY FEILDS
const flashdataEmptyFields = $('.flash-data-empty-fields').data('flashdata')
if (flashdataEmptyFields) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Fill in all fields !'
    })
}

// EMAIL ALREADY IN 
const flashdataEmailIN = $('.flash-data-email-in').data('flashdata')
if (flashdataEmailIN) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email Address already in the DB, Try another !'
    })
}

// INVALID EMAIL 
const flashdataErrorEmail = $('.flash-data-email-error').data('flashdata')
if (flashdataErrorEmail) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid Email-Address !'
    })
}


//File too large
const fileLarge = $('.flash-data-file-large').data('flashdata')
if (fileLarge) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Image file is too large !'
    })
}

//Invalid Phone
const errorPhone = $('.flash-data-error-phone').data('flashdata')
if (errorPhone) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid Phone Number !'
    })
}

//Vehicle in db
const vehicleIn = $('.flash-data-vehicle-in').data('flashdata')
if (vehicleIn) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Vehicle Already in the Db!'
    })
}

//File Not allowd
const notAllowed = $('.flash-data-not-allowed').data('flashdata')
if (notAllowed) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'File Not Allowed, PDF, JPEG, JPG Only !'
    })
}

//Wrong Pwd
const wrongPwd = $('.flash-data-wrong-pwd').data('flashdata')
if (wrongPwd) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Wrong Password !'
    }) 
}

//No item in db
const noItem = $('.flash-data-no-item').data('flashdata')
if (noItem) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please insert item before add image!'
    })
}


const flashDataCart = $('.flash-data-cart').data('flashdata')
if (flashDataCart) {
    swal.fire({
        icon: 'error',
        title: 'Oops....',
        text: 'Item Has Already In The Cart!'
    })
}

const emptyFeilds = $('.flash-data-empty-fields').data('flashdata')
if (emptyFeilds) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Fill in all feilds! '
    })
}


const unregisteredUser = $('.flash-data-login-no-user').data('flashdata')
if (unregisteredUser) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please Register first ! '
    })
}


// No User Error
const noUser2 = $('.flash-data-no-user-2').data('flashdata')
if (noUser2) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'Please login before send messages !'
    })
}

const flashDataCartEmpty = $('.flash-data-cart-empty').data('flashdata')
if (flashDataCartEmpty) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'Your Cart Is Empty! Add Items'
    })
}


const wrongOldOwd = $('.flash-data-wrong-old-pwd').data('flashdata')
if (wrongOldOwd) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'Wrong Old Password'
    })
}

const msgSendError = $('.flash-data-msg-error').data('flashdata')
if (msgSendError) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'Message cannot sent'
    })
}

const userBanned = $('.flash-data-user-banned').data('flashdata')
if (userBanned) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        // html: true,
        text: "Your account has banned by the admin"

    })
}

const invalidPhone = $('.invalid-phone').data('flashdata')
if (invalidPhone) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        // html: true,
        text: "Invalid Phone Number!"

    })
}

const exeedMaxLeave = $('.exeedMaxLeave').data('flashdata')
if (exeedMaxLeave) {
    swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'You have already taken maximum leave, please contact admin'
    })
}