interface DemoInf{
    exp:number;
    totalexp():number;
}

class A implements DemoInf{
    exp:number;
    totalexp(): number {
        return 1;
    }
}

class B implements DemoInf{
    exp:number;
    b:string;
    totalexp(): number {
        return 2;
    }
}

// let emp : DemoInf;

let obj = new A();
console.log(obj.totalexp());

let obj1 = new B();
console.log(obj1.totalexp());


