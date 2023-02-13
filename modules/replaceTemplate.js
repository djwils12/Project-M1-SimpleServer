
module.exports = (htmlStr, course)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, course.customerName);
    output = output.replace(/{%IMAGE%}/g, course.image);
    output = output.replace(/{%PHONE%}/g, course.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, course.address);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%ID%}/g, course.id);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%YEARS%}/g, course.loanTermYears);
    output = output.replace(/{%TYPE%}/g, course.loanType);

    return output;
}