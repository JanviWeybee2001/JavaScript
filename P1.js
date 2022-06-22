alert("Coding Challenge!");



// CODING CHALLENGE 1 & 2


const heightMark = 1.69;
const heightJohn = 1.95;
const weightMark = 78;
const weightJohn = 92

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / heightJohn ** 2;

const markHeigherBMI = BMIMark > BMIJohn;

if(markHeigherBMI)
    console.log(`Mark has a heigher BMI(${BMIMark}) John!!`);
else
console.log(`John has a heigher BMI(${BMIJohn}) Mark!!`);

// CODING CHALLENGE 1 & 2 COMPLETED



// CODING CHALLENGE 3

const Dolphins = [96, 108, 89];
const Koalas = [88, 91, 110];

const avgDolphins = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
const avgKoalas = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;

if (avgDolphins >= avgKoalas)
{
    if (avgDolphins === avgKoalas)
    {
        console.log(`Both gymnastics team  Dolphin and Koalas are winner with ${avgDolphins}  Score!!!`);
    }
    else
    {
        console.log(`gymnastics team Dolphin is winner with ${avgDolphins} score..!!!`);
    }
}
else
{
    console.log(`gymnastics team Koalas is winner with ${avgKoalass} score..!!!`);
}

//BONUS 1 & 2

if (avgDolphins >= avgKoalas && avgDolphins >=100)
{
    if (avgDolphins === avgKoalas)
    {
        console.log(`Both gymnastics team  Dolphin and Koalas are winner with ${avgDolphins}  Score!!!`);
    }
    else
    {
        console.log(`gymnastics team Dolphin is winner with ${avgDolphins} score..!!!`);
    }
}
else
{
    if (avgKoalas >= 100) {
        console.log(`gymnastics team Koalas is winner with ${avgKoalass} score..!!!`);
    }
    else
    {
        console.log("No team wins the trophy");
    }
    
}

// CODING CHALLENGE 3 COMPLETED




// CODING CHALLENGE 4 

const bill = 40;
let tip = (bill >= 50 && bill <= 300) ? bill*(15/100) : bill*(20/100);

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// CODING CHALLENGE 4 COMPLETED 
