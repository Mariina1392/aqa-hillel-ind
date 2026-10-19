    function calculateArea(length, width) {
        return length * width;
    }
    console.log(calculateArea(5, 10)); 

    const calculateArea2 = (length, width) => length * width;
    console.log(calculateArea2(5, 10));

    const calculateArea3 = function(length, width) {
        return length * width;
    };
    console.log(calculateArea3(5, 10));