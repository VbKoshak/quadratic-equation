module.exports = function solveEquation(equation) {
  // your implementation
  //var patern = /\b(\-?)([0-9]*?)\s\*\s(x\^2)\s(\+|-)\s([0-9]*?)\s\*\sx\s(\+|-)\s([0-9]*?)\b/gim;
  var count = 0;
  var i = 0;
  var sb= 0,sc = 0;
  var a = "",b = "",c = "";
  while (equation[i] !=' ')
  {
      a += equation[i];
      i++;
  };
  a = Number(a);

  while(equation[i] != '2')
  {
      i++;
  };
  i+=2;
  if (equation[i] == '-')
  {
      sb = 1;
  };
  i+=2;
  while (equation[i] !=' ')
  {
      b += equation[i];
      i++;
  };
  b = Number(b);
  if (sb)
  {
      b = 0 -b;
  };
  while(equation[i] != 'x')
  {
      i++;
  };
  i +=2;
  if (equation[i] == '-')
  {
      sc = 1;
  };
  i += 2;
  while (i < equation.length)
  {
      c += equation[i];
      i++;
  };
  c = Number(c);
  if (sc)
  {
      c = 0 - c;
  };
 var D = (Math.pow(b,2)) - (4*a*c);
D = Math.sqrt(D);
var x1 = (0-b-D)/(2*a);
var x2 = (0-b+D)/(2*a);
x1 = Math.round(x1);
x2 = Math.round(x2);
var arr = [];
if (x1<0 && x2>0)
 {
    arr.push(x1);
    arr.push(x2);
}
else if (x1>0 && x2 < 0) {
    arr.push(x2);
    arr.push(x1);
}
else if (x1 > 0 && x2 > 0)
{
    if (x1 > x2)
    {
        arr.push(x2);
        arr.push(x1);
    }
    else
    {
        arr.push(x1);
        arr.push(x2);
    };
}
else {
    if (x1-x2<0)
    {
        arr.push(x1);
        arr.push(x2);
    }
    else
    {
        arr.push(x2);
        arr.push(x1);
    }
}
return arr;
}
