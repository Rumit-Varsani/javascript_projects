function calculationtip()
{
    const billamount = parseFloat(document.getElementById("billamount").value);
    const servicequality = parseFloat(document.getElementById("servicequality").value);
    const peoplesharing = parseInt(document.getElementById("peoplesharing").value);

    const tipAmount = (billamount * (servicequality/100));
    const eachperson = tipAmount/peoplesharing;

    document.getElementById("tipamount").value = eachperson.toFixed(2);
}