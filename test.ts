/**
 * 변수에 타입을 지정하는 방법
 */
const num: number = 3;
const str: string = 'test';
const boll: boolean = true;

/**
 * 배열에 타입을 지정하는 방법
 */
const numAry: number[] = [3,2,4,5];
const strAry: string[] = ['test', 'yes'];
const boolAry: boolean[] = [false, true];

/**
 * 여러 개의 타입을 받는 방법
 */
const numAry2: (number | string)[] = ['test', 3, 2, 'no', 4, 5];
let strAry2: string | boolean = true;
let compounds: number | number[] = 0;
strAry2 = 'true';

/**
 * 컴파일러가 정확한 타입을 유추할 수 없는 상황을 해결하기 위한 Type Guard
 */
function divBy2(a: string | number) {
    if(typeof a ==="number"){
        return a/2
    }
    return a
}

/**
 * 정확한 값으로 파라미터를 받는 방법
 */
function noticeClass(cls: '1st' | '2nd' | '3rd'): string {
    return 'your class is ${cls}';
}
noticeClass("1st")

/**
 * 타입을 강제로 무시하고 싶을 경우(되도록 사용하지 않는게 좋음)
 */
const first: any = 123123;
const second: any = '123123';

function add(a: any, b: any): any {
    return a+b;
}
add(first, second)

/**
 * 어떤 타입이 들어올지 모르는 경우
 */
function whatisit(v: unknown) {
    if(typeof v === 'string') {
        return 'v is string';
    }
    if(typeof v === 'number') {
        return 'v is number';
    }
    if(Array.isArray(v)) {
        return 'v is array';
    }
}
whatisit("string")
whatisit(1)
