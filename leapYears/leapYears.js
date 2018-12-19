const leapYears = function(year) {
    if(year % 4 === 0 && year % 100 > 0 || year % 100 >= 0 && year % 400 === 0  ) {
       return true;
    } else {
        return false;
    }
}

module.exports = leapYears


/*
1) years divisible by 400 ARE leap years (so, for example,
2000 will indeed be a leap year),

2) years divisible by 100 but not by 400 are NOT leap years
(so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be
a leap year),

3) years divisible by 4 but not by 100 ARE leap years
(e.g., 1988, 1992, 1996),

4) years not divisible by 4 are NOT leap years.
             */