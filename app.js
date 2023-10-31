const date = document.getElementById("date");
const btn1 = document.getElementById("btn1");
const update = document.getElementById("update");

btn1.addEventListener('click', () =>{
    const value = date.value;
    const Year = Number(value.substr(0,4));
    const month = Number(value.substr(5,2));
    const day = Number(value.substr(8,9));

    console.log(Year);
    console.log(month);
    console.log(day);
    
    const newDat = new Date();
    console.log(newDat);
    const fullYear = newDat.getFullYear();
    const fullMonth = newDat.getMonth() +1;
    const fullday = newDat.getDate();
    console.log(fullYear);
    console.log(fullMonth);
    console.log(fullday);

    console.log(fullYear,fullMonth,fullday);
    const calYear = fullYear - Year;
    const calMonth = fullMonth - month;
    const calDay = fullday - day;

    if(fullYear == Year && fullMonth == month && fullday > day) {
        update.innerHTML = `your  ${calDay} day's old `;
    } else if (fullYear == Year && fullMonth > month && fullday > day) {
        update.innerHTML = `your  ${calMonth} months and ${calDay} day's old `;
    } else if(Year == 0 && month == 0 && day ==0) {
        update.innerHTML = `Please enter correct date`;
    } else if (fullYear > Year && fullMonth > month && fullday > day) {
        update.innerHTML = `your ${calYear} years ${calMonth} months and ${calDay} old `;
    } else if (Year > fullYear && month >= fullMonth && day >= fullday || Year > fullYear && month <= fullMonth && day <= fullday) {
        update.innerHTML = `Age is not greater than current age`;
    } else if (fullYear > Year && fullMonth >= month && fullday > day) {
        update.innerHTML = `your ${calYear} years ${calMonth} months and ${calDay} old `;
    } else if (fullYear > Year && fullMonth <= month && fullday > day) {
        update.innerHTML = `your ${calYear} years ${calMonth} months and ${calDay} old `;
    }

    // if(23<=23 && 10 == 10 && fullday > day) {
    //     console.log("is greater");
    // }



    // // if(23 == 23 && )

    // if(21>20) {
    //     console.log("is greater")
    // }
    // console.log(calYear);
    // console.log(calMonth);
    // console.log(calDay);

});
