// Rút trích domain từ địa chỉ Email
// using split
function extractDomainV1(email) {
    // your code here
    const domain = email.split('@');

    return domain[1];
}


// using indexOf() and slice()
function extractDomainV2(email) {
    // your code here

    if (email === '') return '';
    const index = email.indexOf('@');
    return email.slice(index + 1);
}

console.log(extractDomainV1('binhduong@gmail.com'));