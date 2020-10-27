function addFun(v1,v2)
{
    return v1+v2
}
function subFun(v1,v2)
{
    return v1-v2
}
function mulFun(v1,v2)
{
    return v1*v2
}
function divFun(v1,v2)
{
    return v1/v2
}
function sqFun(v1)
{
    return(mulFun(v1,v1))
}
function sqrtFun(v1)
{
    return Math.sqrt(v1)
}
function performOpertation(v1,v2,operand)
{
    switch(operand)
    {
        case "Add":
                   return addFun(v1,v2)
        case "Sub" :
                    return subFun(v1,v2)
        case "Mul":
                    return mulFun(v1,v2)
        case "div":
                    return divFun(v1,v2)
        case "square" :
                    return sqFun(v1)
        case "squareroot":
                    return sqrtFun(v1)
        default :
                alert("Invalid Operation")
             
        
    }
}